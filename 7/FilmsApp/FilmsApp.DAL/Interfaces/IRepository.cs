using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmsApp.DAL.Interfaces
{
    public interface IRepository<T> where T : class
    {
        IEnumerable<T> GetAll();

        T GetById(int id);

        IEnumerable<T> Find(Func<T, Boolean> predicate);

        void Save(T item);

        void Delete(int id);
    }
}
