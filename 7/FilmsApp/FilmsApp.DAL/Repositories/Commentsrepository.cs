﻿using FilmsApp.DAL.Models;
using FilmsApp.DAL.Interfaces;
using System.Data.Entity;
using System.Collections.Generic;
using System.Linq;

namespace FilmsApp.DAL.Repositories
{
    public class CommentsRepository : BaseRepository<Comment>, ICommentsRepository
    {
        public CommentsRepository(DbContext db) : base(db)
        {
        }
            public ICollection<Comment> GetByFilmId()
        {
            var a = DbSet.Where(p => p.Id == 1).ToList();
            return a;
        }
    
    }
}
