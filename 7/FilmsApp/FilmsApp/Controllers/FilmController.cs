using System;
using System.Web.Mvc;
using FilmsApp.DAL.Interfaces;
using System.Linq;
using Microsoft.AspNet.Identity.EntityFramework;
using FilmsApp.DAL.Models;
using FilmsApp.DAL.Context;
using Microsoft.AspNet.Identity;
using System.Linq.Expressions;

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
            return View();
        }

        //TODO: move this logic to BLL or implement in repository
        public JsonResult SortAndSearch(string sortOrder, string searchString)
        {
            var films = _unitofwork.FilmsRepository.GetAll();
            if (!String.IsNullOrEmpty(searchString))
            {
                films = films.Where(s => s.Title.ToUpper().Contains(searchString.ToUpper())).ToList();
            }
            switch (sortOrder)
            {
                case "Title":
                    films = films.OrderBy(s => s.Title);
                    break;
                case "Rating":
                    films = films.OrderByDescending(s => s.Rating);
                    break;
                case "FilmId":
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

        public ActionResult GetCurrentUsername()
        {
            var context = new FilmsContext();
            var store = new UserStore<ApplicationUser>(context);
            var manager = new UserManager<ApplicationUser>(store);
            var user = manager.FindById(User.Identity.GetUserId());
            return Content(user.UserName);
        }

        Expression<Func<FilmsImage, bool>> GetImg(int id){ 
            return img => img.FilmId == id;
        }

        public JsonResult ReturnImages(int id)
        {
            var images = _unitofwork.FilmsImagesRepository.GetAll(n => n.FilmId == id);
            return Json(images, JsonRequestBehavior.AllowGet);
        }



        //
        public JsonResult ReturnScreenshots(int id)
        {
            throw new NotImplementedException();
            var screenshots = _unitofwork.FilmsImagesRepository.GetById(id);
            return Json(screenshots, JsonRequestBehavior.AllowGet);
        }
        public JsonResult ReturnComments(int id)
        {
            throw new NotImplementedException();
            var comments = _unitofwork.CommentsRepository.GetById(id);
            return Json(comments, JsonRequestBehavior.AllowGet);
        }

    }
}