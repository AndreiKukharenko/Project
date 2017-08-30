using System;
using System.Data.Entity;
using Microsoft.AspNet.Identity.EntityFramework;
using FilmsApp.DAL.Models;

namespace FilmsApp.DAL.Context
{
    public class UserIdentityContext : IdentityDbContext<ApplicationUser>
    {
        public UserIdentityContext() : base("FilmsConnection")
        {
        }

        public static UserIdentityContext Create()
        {
            return new UserIdentityContext();
        }
    }
}
