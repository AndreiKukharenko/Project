using System;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FilmsApp.DAL.ViewModels;
using FilmsApp.DAL.Models;

namespace FilmsApp.Controllers
{
    public class RegisterController : Controller
    {
        private readonly DbSet<User> _currentUserDbSet;

        private bool registered = false;

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
                _currentUserDbSet.Add(user);
                registered = true;
            }
            
                return Content("registered");
        }



    }
}
