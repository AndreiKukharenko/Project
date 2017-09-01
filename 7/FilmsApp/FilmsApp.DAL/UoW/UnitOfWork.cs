using FilmsApp.DAL.Context;
using FilmsApp.DAL.Interfaces;
using FilmsApp.DAL.Models;
using FilmsApp.DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmsApp.DAL.UoW
{
    public class UnitOfWork : IUoW
    {
        private FilmsContext context = new FilmsContext(); //todo: inject context
        private FilmsRepository _filmsRepository;
        //private CommentsRepository _commentsRepository;
        //private FilmsImagesRepository _filmsImagesrepository;

        public FilmsRepository FilmsRepository  //todo: IFilmsRepository
        {
            get
            {
                if (this._filmsRepository == null)
                {
                    this._filmsRepository = new FilmsRepository(context);
                }
                return _filmsRepository;
            }
        }
        // add properties for other repositories


        public void Save()
        {
            context.SaveChanges();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
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
