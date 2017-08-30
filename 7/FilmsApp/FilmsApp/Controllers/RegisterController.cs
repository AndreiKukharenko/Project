using System;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FilmsApp.DAL.ViewModels;
using FilmsApp.DAL.Models;
using FilmsApp.DAL.Context;

namespace FilmsApp.Controllers
{
    public class RegisterController : Controller
    {
        //private readonly DbSet<User> _currentUserDbSet;

        private bool registered = false;

        private FilmsContext db;

        public RegisterController()
        {
            db = new FilmsContext();
        }

        // GET: Register
        public ActionResult Index()
        {
            return View();
        }

        
        public ActionResult Register()
        {
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult Register(UserRegistrationViewModel model)
        {

            User user = new User();
            if (ModelState.IsValid)
            {
                user.FirstName = model.FirstName;
                user.LastName = model.LastName;
                user.Login = model.Login;
                user.Password = model.Password;
                user.PhoneNumber = model.PhoneNumber;
                user.BirthDate = model.BirthDate;
                user.Email = model.Email;
                // check if passwordConfirm = password
                db.Users.Add(user);
                registered = true;
            }
            
                return Content("registered");
        }



    }
}
