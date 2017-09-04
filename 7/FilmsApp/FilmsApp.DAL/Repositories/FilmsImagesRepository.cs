using FilmsApp.DAL.Models;
using FilmsApp.DAL.Interfaces;
using System.Data.Entity;
using System.Collections;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using FilmsApp.DAL.Context;

namespace FilmsApp.DAL.Repositories
{
    public class FilmsImagesRepository : BaseRepository<FilmsImage>, IFilmsImagesRepository
    {
        public FilmsImagesRepository(FilmsContext db) : base(db)
        {
        }
    }
}
