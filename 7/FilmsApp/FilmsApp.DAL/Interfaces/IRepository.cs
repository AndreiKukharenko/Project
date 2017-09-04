using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace FilmsApp.DAL.Interfaces
{
    public interface IRepository<T> where T : class
    {
        IEnumerable<T> GetAll();

        T GetById(int id);

        IEnumerable<T> Find(Func<T, Boolean> predicate);

        IEnumerable<T> GetAll(Expression<Func<T, Boolean>> predicate);

        void Save(T item);

        void Delete(int id);
    }
}
