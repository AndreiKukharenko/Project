namespace FilmsApp.DAL.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using FilmsApp.DAL.Context;
    using Models;

    internal sealed class Configuration : DbMigrationsConfiguration<FilmsContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }
    }
}
