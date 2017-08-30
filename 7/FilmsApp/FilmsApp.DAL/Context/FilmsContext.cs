using System;
using System.Linq;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration;
using FilmsApp.DAL.Models;

namespace FilmsApp.DAL.Context
{
    /// <summary>
    /// 
    /// </summary>
    public class FilmsContext : DbContext
    {
        public FilmsContext()
        {

        }

        /// <summary>
        /// 
        /// </summary>
        public DbSet<User> Users { get; set; }

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
    }
}
