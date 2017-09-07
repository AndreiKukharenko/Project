using System;
using System.Collections.Generic;
using System.Linq;
using FilmsApp.DAL.Interfaces;
using FilmsApp.BLL.DTO;
using FilmsApp.BLL.Interfaces;
using FilmsApp.DAL.Models;

namespace FilmsApp.BLL.Services
{
    public class FilmsService : IFilmService
    {
        private IUoW _unitOfWork;

        public FilmsService(IUoW UoW)
        {
            _unitOfWork = UoW;
        }

        public IEnumerable<FilmDTO> GetAll()
        {
            // todo: IQueryable
            var films = _unitOfWork.FilmsRepository.GetAll();

            return films.Select(film => new FilmDTO
            {
                Id = film.Id,
                Title = film.Title,
                Description = film.Description,
                Poster = film.Poster,
                Rating = film.Rating,
            }).ToList();
        }

        public FilmDTO GetFilmById(int id)
        {
            var film = _unitOfWork.FilmsRepository.GetById(id);

            var filmDTO = new FilmDTO
                {
                    Id = film.Id,
                    Title = film.Title,
                    Description = film.Description,
                    Poster = film.Poster,
                    Rating = film.Rating,
                    Images = film.Images.Select(BuildImageDTO).ToList(), //EF resolves it
                    Comments = film.Comments.Select(BuildCommentDTO).ToList()
                };
            return filmDTO;
        }


        private ImageDTO BuildImageDTO(FilmsImage image)
        {
            var imagesDTO = new ImageDTO
            {
                ImageUrl = image.ImageUrl
            };

            return imagesDTO;
        }

        private CommentDTO BuildCommentDTO(Comment comment)
        {
            var commentDTO = new CommentDTO
            {
                UserName = comment.UserName,
                Text = comment.Text
            };
            return commentDTO;
        }

        public bool AddComment(CommentDTO commentDTO)
        {
            try
            {
                var comment = new Comment
                {
                    FilmId = commentDTO.FilmId,
                    IsDeleted = false,
                    Text = commentDTO.Text,
                    UserName = commentDTO.UserName,
                };
                _unitOfWork.CommentsRepository.AddItem(comment);
            }
            catch(Exception)
            {
                return false;
            }
            return true;
        }

        public IEnumerable<FilmDTO> SortAndSearch(string sortOrder, string searchString)
        {
            var films = GetAll();
            if (!String.IsNullOrEmpty(searchString))
            {
                films = films.Where(s => s.Title.ToUpper().Contains(searchString.ToUpper())).ToList();
            }

            switch (sortOrder)
            {
                case "Title":
                    films = films.OrderBy(s => s.Title);
                    break;
                case "Rating":
                    films = films.OrderByDescending(s => s.Rating);
                    break;
                case "FilmId":
                default:
                    films = films.OrderBy(s => s.Id);
                    break;
            }

            if (String.IsNullOrEmpty(searchString))
            {
                return films;
            }
            else return films;
        }




    }
}
