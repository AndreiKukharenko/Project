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
        IEnumerable<FilmDTO> GetAll();

        FilmDTO GetFilmById(int id);

        IEnumerable<FilmDTO> SortAndSearch(string sortOrder, string searchString);

        bool AddComment(CommentDTO comment);
    }
}
