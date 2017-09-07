using System;
using System.Web.Mvc;
using FilmsApp.DAL.Interfaces;
using System.Linq;
using Microsoft.AspNet.Identity.EntityFramework;
using FilmsApp.DAL.Models;
using FilmsApp.DAL.Context;
using Microsoft.AspNet.Identity;
using System.Linq.Expressions;
using FilmsApp.BLL.Interfaces;
using FilmsApp.BLL.DTO;

namespace FilmsApp.Controllers
{
    [Authorize] 
    public class FilmController : Controller
    {
        private IUoW _unitOfWork;
        private IFilmService _filmservice;

        public FilmController(IUoW unitOfWork, IFilmService filmservice)
        {
            _unitOfWork = unitOfWork;
            _filmservice = filmservice;
        }

        private ApplicationUser CurrentUser
        {
            get
            {
                var store = new UserStore<ApplicationUser>(new FilmsContext());
                var manager = new UserManager<ApplicationUser>(store);
                var user = manager.FindById(User.Identity.GetUserId());
                return user;
            }
        }

        public ActionResult Index()
        {
            if (CurrentUser == null) ViewBag.CurrentUserName = "not logged in"; // for debug
            else ViewBag.CurrentUserName = CurrentUser.UserName;
            return View();
        }

        public JsonResult SortAndSearch(string sortOrder, string searchString)
        {
            var films = _filmservice.SortAndSearch(sortOrder, searchString);
            return Json(films, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ReturnFilmById(int id)
        {
            var film = _filmservice.GetFilmById(id);
            return Json(film, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ReturnFilms()
        {
            var films = _filmservice.GetAll();
            return Json(films, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult AddComment(CommentDTO comment)
        {
            if (_filmservice.AddComment(new CommentDTO
            {
                FilmId = comment.FilmId,
                Text = comment.Text,
                UserName = CurrentUser.UserName,
            })) return new HttpStatusCodeResult(200);
            else return new HttpStatusCodeResult(500, "cannot add new comment");
        }
    }
}