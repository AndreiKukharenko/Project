using System;
using System.Web.Mvc;
using FilmsApp.DAL.Interfaces;
using System.Linq;

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

        // ToDo: watch this
        public ActionResult List(int? pageIndex, string sortBy)
        {
            if (!pageIndex.HasValue)
                pageIndex = 1;
            if (String.IsNullOrWhiteSpace(sortBy))
                sortBy = "Name";

            return Content($"page №{pageIndex}, sort by {sortBy}");
        }

        //TODO: move this logic to BLL or implement in repository
        public JsonResult SortAndSearch(string sortOrder, string searchString)
        {
            var films = _unitofwork.FilmsRepository.GetAll();
            if (!String.IsNullOrEmpty(searchString))
            {
                films = films.Where(s => s.Title.ToUpper().Contains(searchString.ToUpper())
                                       || s.Description.ToUpper().Contains(searchString.ToUpper()));
            }
            switch (sortOrder)
            {
                case "FilmId":
                    films = films.OrderByDescending(s => s.Id);
                    break;
                case "Name":
                    films = films.OrderBy(s => s.Title);
                    break;
                case "Rating":
                    films = films.OrderByDescending(s => s.Rating);
                    break;
                default:
                    films = films.OrderBy(s => s.Id);
                    break;
            }

            return Json(films, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ReturnFilmById(int id)
        {
            var jsondata = _unitofwork.FilmsRepository.GetById(id);
            return Json(jsondata, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ReturnFilms()
        {
            var films = _unitofwork.FilmsRepository.GetAll();
            return Json(films, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ReturnComments(int id)
        {
            // *******************************************************! get comment by FilmId
            var comments = _unitofwork.CommentsRepository.GetById(id);
            return Json(comments, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ReturnScreenshots(int id)
        {
            var screenshots = _unitofwork.FilmsImagesRepository.GetById(id);
            return Json(screenshots, JsonRequestBehavior.AllowGet);
        }

    }
}