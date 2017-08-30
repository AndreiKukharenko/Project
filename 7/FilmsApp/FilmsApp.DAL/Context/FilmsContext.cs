﻿using System;
using System.Linq;
using System.Data.Entity;
using FilmsApp.DAL.Models;

namespace FilmsApp.DAL.Context
{
    /// <summary>
    /// 
    /// </summary>
    public class FilmsContext : DbContext
    {
        public FilmsContext(): base ("FilmsConnection")
        {
            Database.SetInitializer(new FilmsAppInitializer());
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
