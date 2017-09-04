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
            //var images = _unitofwork.FilmsImagesRepository.GetAll();
            //var comments = _unitofwork.CommentsRepository.GetAll();
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

        public IEnumerable<FilmDTO> GetFilmById(int id)
        {
            List<FilmDTO> filmsDTO = new List<FilmDTO>();
            var films = _unitofwork.FilmsRepository.GetAll(p => p.Id == id);
            var images = _unitofwork.FilmsImagesRepository.GetAll(p => p.FilmId == id);
            var comments = _unitofwork.CommentsRepository.GetAll(p => p.FilmId == id);

            foreach (var film in films)
            {
                filmsDTO.Add(new FilmDTO
                {
                    Id = film.Id,
                    Title = film.Title,
                    Description = film.Description,
                    Poster = film.Poster,
                    Rating = film.Rating,
                    Images = images,
                    // Comments = comments
                });
            }
            return filmsDTO;
        }

    }
}
