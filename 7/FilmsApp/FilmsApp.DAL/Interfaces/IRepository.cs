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
        ICollection<T> GetAll();

        T GetById(int id);

        ICollection<T> Find(Func<T, Boolean> predicate);

        ICollection<T> GetAll(Expression<Func<T, Boolean>> predicate);

        void AddItem(T item);

        void Delete(int id);
    }
}
