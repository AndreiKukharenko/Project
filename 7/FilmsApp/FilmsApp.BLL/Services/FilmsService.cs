using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FilmsApp.DAL.Interfaces;
using FilmsApp.BLL.DTO;
using FilmsApp.BLL.Interfaces;

namespace FilmsApp.BLL.Services
{
    public class FilmsService : IFilmService
    {
        private IUoW _unitofwork;

        public FilmsService(IUoW UoW)
        {
            _unitofwork = UoW;
        }

        public IEnumerable<FilmDTO> GetAllFilms()
        {
            List<FilmDTO> filmsDTO = new List<FilmDTO>();
            var films = _unitofwork.FilmsRepository.GetAll();
            foreach (var film in films)
            {
                filmsDTO.Add(new FilmDTO
                {
                    Id = film.Id,
                    Title = film.Title,
                    Description = film.Description,
                    Poster = film.Poster,
                    Rating = film.Rating,
                    });
            }
            return filmsDTO;
        }

        public FilmDTO GetFilmById(int id)
        {
            var film = _unitofwork.FilmsRepository.GetAll(p => p.Id == id).FirstOrDefault();
            var images = GetFilmsImagesByFilmId(id);
            //var comments = _unitofwork.CommentsRepository.GetAll(p => p.FilmId == id);

            var filmDTO = new FilmDTO
                {
                    Id = film.Id,
                    Title = film.Title,
                    Description = film.Description,
                    Poster = film.Poster,
                    Rating = film.Rating,
                    Images = images,
                    //Comments = comments
                };
            return filmDTO;
        }


        private ImagesDTO GetFilmsImagesByFilmId(int id)
        {
            var images = _unitofwork.FilmsImagesRepository.GetAll(p => p.FilmId == id).FirstOrDefault();

            var imagesDTO = new ImagesDTO
            {
                Id = images.Id,
                FilmId = images.FilmId,
                ImageUrl = images.ImageUrl
            };

            return imagesDTO;
        }
        
        //private CommentsDTO GetCommentsByFilmId(int id)
        //{
        //    return new CommentsDTO;
        //}
    }
}
