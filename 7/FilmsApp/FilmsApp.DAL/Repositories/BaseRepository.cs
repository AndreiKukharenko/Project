using FilmsApp.DAL.Interfaces;
using FilmsApp.DAL.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmsApp.DAL.Repositories
{
    public abstract class BaseRepository<TEntity> : IRepository<TEntity>
            where TEntity : BaseEntity
    {
        private DbContext _db;
        public BaseRepository(DbContext db)
        {
            this._db = db;
        }
        protected DbSet<TEntity> DbSet
        {
            get
            {
                return _db.Set<TEntity>();
            }
        }

        public void Delete(int id)
        {
            DbSet.Remove(GetById(id));
        }

        public IEnumerable<TEntity> Find(Func<TEntity, bool> predicate)
        {
            return DbSet.Where(predicate).ToList();
        }

        public TEntity GetById(int id)
        {
            return DbSet.Find(id);
        }

        public IEnumerable<TEntity> GetAll()
        {
            return DbSet.ToList();
        }

        public void Save(TEntity item)
        {
            DbSet.Add(item);
        }
    }
}
