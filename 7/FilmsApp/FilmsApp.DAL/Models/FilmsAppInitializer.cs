using FilmsApp.DAL.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmsApp.DAL.Models
{
    class FilmsAppInitializer : System.Data.Entity.CreateDatabaseIfNotExists<FilmsContext>
    {
        protected override void Seed(FilmsContext context)
        {
            //base.Seed(context);
            addDefaultUsers(context);
            addDefaultFilms(context);
            addDefaultComments(context);
            addDefaultImages(context);
        }

        private void addDefaultUsers(FilmsContext context)
        {
            context.Users.Add(new User
            {
                Id = 0,
                FirstName = "first user",
                LastName = "last name",
                Email = "asd@mail.com"
            });
            context.Users.Add(new User
            {
                Id = 1,
                FirstName = "second user",
                LastName = "last name",
                Email = "asd@mail.com"
            });
            context.SaveChanges();
        }

        private void addDefaultFilms(FilmsContext context)
        {
            context.Films.Add(new Film
            {
                Id = 0,
                Title = "film: sunt aut facere repellat",
                Description = "quia et suscipit\nsuscipit recusandae consequuntur expedita et cu"
            });

            context.Films.Add(new Film
            {
                Id = 1,
                Title = "Aut facere repellat",
                Description = "Aut facere repellatAut facere repellat"
            });
            context.SaveChanges();

        }

        private void addDefaultComments(FilmsContext context)
        {
            context.Comments.Add(new Comment
            {
                CommentId = 0,
                Text = "comment to 1",
                //User = "1"
            });
        }

        private void addDefaultImages(FilmsContext context)
        {
            context.FilmsImages.Add(new FilmsImage
            {
                Id = 0,
                Poster = "https://st.kp.yandex.net/im/kadr/3/0/2/kinopoisk.ru-Twin-Peaks-3020658.jpg",
            });

            context.FilmsImages.Add(new FilmsImage
            {
                Id = 1,
                Poster = "http://rankin.co.uk/media/DRU_Subway2Sheet_5P_REV-556x420.jpg"
            });
        }

    }
}
