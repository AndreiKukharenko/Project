﻿using FilmsApp.DAL.Models;
using System.Data.Entity;


namespace FilmsApp.DAL.Repositories
{
    public class FilmsRepository : BaseRepository<Film>
    {
        public FilmsRepository(DbContext db) : base(db)
        {
        }
    }
}
