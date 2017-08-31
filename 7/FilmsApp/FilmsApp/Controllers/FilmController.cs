using FilmsApp.DAL.Context;
using FilmsApp.DAL.Models;
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
        private CommonRepository<Film> _filmRepository;

        public FilmController()
        {
            _db = new FilmsContext();
            _filmRepository = new CommonRepository<Film>(_db);
        }


        public ActionResult Index()
        {
            var films = _filmRepository.GetAll();
            return View(films);
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