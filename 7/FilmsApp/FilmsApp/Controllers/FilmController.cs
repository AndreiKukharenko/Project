﻿using System;
using System.Web.Mvc;
using FilmsApp.DAL.Interfaces;
using System.Linq;
using Microsoft.AspNet.Identity.EntityFramework;
using FilmsApp.DAL.Models;
using FilmsApp.DAL.Context;
using Microsoft.AspNet.Identity;
using System.Linq.Expressions;
using FilmsApp.BLL.Interfaces;

namespace FilmsApp.Controllers
{
    // TODO [Authorize]
    //[Authorize] 
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

        //TODO: move this logic to BLL
        public JsonResult SortAndSearch(string sortOrder, string searchString)
        {
            var films = _filmservice.GetAllFilms();
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

            if (String.IsNullOrEmpty(searchString))
            {
                return Json(films, JsonRequestBehavior.AllowGet);
            }
            else return Json(films, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ReturnFilmById(int id)
        {
            var film = _filmservice.GetFilmById(id);
            return Json(film, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ReturnFilms()
        {
            var films = _filmservice.GetAllFilms();
            return Json(films, JsonRequestBehavior.AllowGet);
        }

        public ActionResult AddComment(int filmId, string text)
        {
            _unitOfWork.CommentsRepository.AddItem(
                new Comment { FilmId = filmId, Text = text });
            return new HttpStatusCodeResult(200);
        }

    }
}