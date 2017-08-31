using FilmsApp.DAL.Context;
using FilmsApp.DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FilmsApp.Controllers
{
    public class FilmController : Controller
    {
        private FilmsContext _db;

        private FilmsRepository _filmsRepository;

        public FilmController()
        {
            _db = new FilmsContext();
            _filmsRepository = new FilmsRepository(_db);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public ActionResult Index()
        {
            var films = _db.Films.ToList();
            var films2 = _filmsRepository.GetAll();
            return View(films2);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="pageIndex"></param>
        /// <param name="sortBy"></param>
        /// <returns></returns>
        public ActionResult List(int? pageIndex, string sortBy)
        {
            if (!pageIndex.HasValue)
                pageIndex = 1;
            if (String.IsNullOrWhiteSpace(sortBy))
                sortBy = "Name";

            return Content($"page №{pageIndex}, sort by {sortBy}");
        }
    }
}