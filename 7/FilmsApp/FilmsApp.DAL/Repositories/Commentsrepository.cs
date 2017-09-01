using FilmsApp.DAL.Models;
using System.Data.Entity;

namespace FilmsApp.DAL.Repositories
{
    class CommentsRepository : BaseRepository<Comment>
    {
        public CommentsRepository(DbContext db) : base(db)
        {
        }
    
    }
}
