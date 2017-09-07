using FilmsApp.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmsApp.DAL.Interfaces
{
    public interface IFilmsRepository : IRepository<Film>
    {
    }
}
