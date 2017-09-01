using FilmsApp.DAL.Models;
using FilmsApp.DAL.Interfaces;
using System.Data.Entity;

namespace FilmsApp.DAL.Repositories
{
    public class FilmsImagesRepository : BaseRepository<FilmsImage>, IFilmsImagesRepository
    {
        public FilmsImagesRepository(DbContext db) : base(db)
        {

        }
    }
}
