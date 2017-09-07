using FilmsApp.DAL.Context;
using FilmsApp.DAL.Interfaces;
using FilmsApp.DAL.Models;
using FilmsApp.DAL.Repositories;
using System;

namespace FilmsApp.DAL.UoW
{
    public class UnitOfWork : IUoW
    {
        private FilmsContext _context; //todo: inject _context
        private IFilmsRepository _filmsRepository;
        private ICommentsRepository _commentsRepository;
        private IFilmsImagesRepository _filmsImagesrepository;

        public UnitOfWork(FilmsContext context)
        {
            _context = context;
        }

        public IFilmsRepository FilmsRepository
        {
            get
            {
                if (this._filmsRepository == null)
                {
                    this._filmsRepository = new FilmsRepository(_context);
                }
                return _filmsRepository;
            }
        }
        public ICommentsRepository CommentsRepository
        {
            get
            {
                if (this._commentsRepository == null)
                {
                    this._commentsRepository = new CommentsRepository(_context);
                }
                return _commentsRepository;
            }
        }
        public IFilmsImagesRepository FilmsImagesRepository
        {
            get
            {
                if (this._filmsImagesrepository == null)
                {
                    this._filmsImagesrepository = new FilmsImagesRepository(_context);
                }
                return _filmsImagesrepository;
            }
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

    }
}
