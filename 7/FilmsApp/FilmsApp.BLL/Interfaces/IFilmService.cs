using FilmsApp.BLL.DTO;
using FilmsApp.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmsApp.BLL.Interfaces
{
    public interface IFilmService
    {
        IEnumerable<FilmDTO> GetAllFilms();

        FilmDTO GetFilmById(int id);

        //IEnumerable<Film> SortAndSearchFilms(string sortOrder, string searchString);
    }
}
