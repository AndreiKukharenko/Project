using FilmsApp.DAL.Context;
using FilmsApp.DAL.Interfaces;
using FilmsApp.DAL.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Core;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmsApp.DAL.Repositories
{
    public class FilmsRepository : BaseRepository<Film>
    {
        public FilmsRepository(DbContext db) : base(db)
        {
        }
    }
}
