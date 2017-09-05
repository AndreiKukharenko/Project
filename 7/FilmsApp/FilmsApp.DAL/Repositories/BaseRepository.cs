using FilmsApp.DAL.Context;
using FilmsApp.DAL.Interfaces;
using FilmsApp.DAL.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;

namespace FilmsApp.DAL.Repositories
{
    public abstract class BaseRepository<TEntity> : IRepository<TEntity>
            where TEntity : BaseEntity
    {
        private FilmsContext _db;
        public BaseRepository(FilmsContext db)
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

        public IEnumerable<TEntity> GetAll(Expression<Func<TEntity, Boolean>> predicate)
        {
            return DbSet.Where(predicate).ToList();
        }

        public void AddItem(TEntity item)
        {
            DbSet.Add(item);
            _db.SaveChanges();
        }
    }
}
