using FilmsApp.DAL.Models;
using FilmsApp.DAL.Interfaces;
using System.Data.Entity;
using System.Collections.Generic;
using System.Linq;
using FilmsApp.DAL.Context;

namespace FilmsApp.DAL.Repositories
{
    public class CommentsRepository : BaseRepository<Comment>, ICommentsRepository
    {
        public CommentsRepository(FilmsContext db) : base(db)
        {
        }
            
    }
}
