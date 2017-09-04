using System;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Collections.Generic;

namespace FilmsApp.DAL.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Password { get; set; }

        public DateTime? BirthDate { get; set; }

        public virtual ICollection<Comment> Comments { get; set; }
    }
}
