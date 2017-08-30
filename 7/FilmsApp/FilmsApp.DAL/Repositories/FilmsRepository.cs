using FilmsApp.DAL.Context;
using FilmsApp.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmsApp.DAL.Repositories
{
    public class FilmsRepository // : IRepository<Film>
    {
        private FilmsContext _db;

        public FilmsRepository(FilmsContext db)
        {
            this._db = db;
        }

        public void Delete(int id)
        {
            _db.Films.Remove(Get(id));
        }

        public IEnumerable<Film> Find(Func<Film, bool> predicate)
        {
            var films = _db.Films.Where(predicate).ToList();

            return films;
        }

        public Film Get(int id)
        {
            var film = _db.Films.Where(p => p.Id == id).FirstOrDefault();

            //if (film != null)

            return film;
        }

        public IEnumerable<Film> GetAll()
        {
            var films = _db.Films.ToList();

            return films;
        }

        public void Save(Film item)
        {
            _db.Films.Add(item);
        }
    }
}

