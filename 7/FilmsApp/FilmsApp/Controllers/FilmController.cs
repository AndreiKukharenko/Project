using System;
using System.Web.Mvc;
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

        [Authorize]
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

        public JsonResult ReturnFilmById(int id)
        {
            var jsondata = _unitofwork.FilmsRepository.GetById(id);
            //Response.AppendHeader("Access-Control-Allow-Origin", "http://localhost:3000");
            return Json(jsondata, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ReturnFilms()
        {
            var films = _unitofwork.FilmsRepository.GetAll();
            return Json(films, JsonRequestBehavior.AllowGet);
        }
    }
}