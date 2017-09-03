using FilmsApp.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace FilmsApp.DAL.Interfaces
{
    public interface IFilmsImagesRepository : IRepository<FilmsImage>
    {
        IEnumerable<FilmsImage> GetAll(Expression<Func<FilmsImage, Boolean>> predicate);
    }
}
