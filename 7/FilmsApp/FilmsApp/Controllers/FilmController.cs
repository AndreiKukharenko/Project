using System;
using System.Web;
using System.Web.Mvc;
using FilmsApp.DAL.Context;
using FilmsApp.DAL.Models;
using FilmsApp.DAL.Repositories;
using FilmsApp.DAL.UoW;
using Ninject;

using FilmsApp.App_Start;
using FilmsApp.DAL.Interfaces;

namespace FilmsApp.Controllers
{
    public class FilmController : Controller
    {
        private IUoW _unitofwork;

        public FilmController(IUoW UoW)
        {
            _unitofwork = UoW;
        }

        public ActionResult Index()
        {
            var films = _unitofwork.FilmsRepository.GetAll();
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