using System;
using System.Linq;
using System.Data.Entity;
using FilmsApp.DAL.Models;
using Microsoft.AspNet.Identity.EntityFramework;
using FilmsApp.DAL.Interfaces;

namespace FilmsApp.DAL.Context
{
    /// <summary>
    /// 
    /// </summary>
    public class FilmsContext : IdentityDbContext<ApplicationUser>, IFilmsContext
    {
        public FilmsContext(): base ("FilmsConnection")
        {
            Database.SetInitializer(new FilmsAppInitializer());
        }

        //public DbSet<User> Users { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public DbSet<Comment> Comments { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public DbSet<Film> Films { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public DbSet<FilmsImage> FilmsImages { get; set; }

        public static FilmsContext Create()
        {
            return new FilmsContext();
        }
    }
}
