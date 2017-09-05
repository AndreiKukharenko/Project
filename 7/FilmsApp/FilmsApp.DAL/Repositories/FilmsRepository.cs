﻿using FilmsApp.DAL.Context;
using FilmsApp.DAL.Interfaces;
using FilmsApp.DAL.Models;
using System.Data.Entity;

namespace FilmsApp.DAL.Repositories
{
    public class FilmsRepository : BaseRepository<Film>, IFilmsRepository
    {
        public FilmsRepository(FilmsContext db) : base(db)
        {
        }
    }
}
