using FilmsApp.DAL.Models;
using System.Data.Entity;

namespace FilmsApp.DAL.Repositories
{
    class FilmsImagesRepository : BaseRepository<FilmsImage>
    {
        public FilmsImagesRepository(DbContext db) : base(db)
        {

        }
    }
}
