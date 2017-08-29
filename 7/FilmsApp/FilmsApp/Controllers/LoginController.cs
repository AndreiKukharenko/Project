using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FilmsApp.DAL.ViewModels;

namespace FilmsApp.Controllers
{
    public class LoginController : Controller
    {

        public ActionResult Index()
        {
            return View();
        }


        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult Index(LoginViewModel model)
        {

            if (ModelState.IsValid)
            {

            }

            return RedirectToRoute(new { controller = "Film", action = "List", area = string.Empty });
        }
    }
}