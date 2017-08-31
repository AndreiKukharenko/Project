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
    public class CommonRepository<TEntity> : IRepository<TEntity>
        where TEntity: BaseEntity
    {
        private DbContext _db;
        public CommonRepository(DbContext db)
        {
            this._db = db;
        }
        private DbSet<TEntity> DbSet
        {
            get
            {
                return _db.Set<TEntity>();
            }
        }

        public void Delete(int id)
        {
            DbSet.Remove(Get(id));
        }

        public IEnumerable<TEntity> Find(Func<TEntity, bool> predicate)
        {
            var films = DbSet.Where(predicate).ToList();
            return films;
        }

        public TEntity Get(int id)
        {
            var film = DbSet.Find(id);
            return film;
        }

        public IEnumerable<TEntity> GetAll()
        {
            var films = DbSet.ToList();
            return films;
        }

        public void Save(TEntity item)
        {
            DbSet.Add(item);
        }
    }
}
