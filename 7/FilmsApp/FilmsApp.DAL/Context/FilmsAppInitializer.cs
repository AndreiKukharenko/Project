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
            //addDefaultUsers(context);
            addDefaultFilms(context);
            addDefaultComments(context);
            addDefaultImages(context);
            context.SaveChanges();
        }

        private void addDefaultUsers(FilmsContext context)
        {
            //context.Users.Add(new User
            //{
            //    Id = 1,
            //    FirstName = "first user",
            //    LastName = "last name",
            //    Email = "asd@mail.com"
            //});
            //context.Users.Add(new User
            //{
            //    Id = 2,
            //    FirstName = "second user",
            //    LastName = "last name",
            //    Email = "asd@mail.com"
            //});
        }

        private void addDefaultFilms(FilmsContext context)
        {
            context.Films.Add(new Film
            {
                Id = 1,
                Title = "film: sunt aut facere repellat",
                Description = "quia et suscipit\nsuscipit recusandae consequuntur expedita et cu",
                Poster = "https://st.kp.yandex.net/im/kadr/3/0/2/kinopoisk.ru-Twin-Peaks-3020658.jpg",

            });

            context.Films.Add(new Film
            {
                Id = 2,
                Title = "Aut facere repellat",
                Description = "Aut facere repellatAut facere repellat",
                Poster = "http://rankin.co.uk/media/DRU_Subway2Sheet_5P_REV-556x420.jpg"

            });

            context.Films.Add(new Film
            {
                Id = 3,
                Title = "suscipit perspiciatis velit",
                Description = "Aut suscipit perspiciatis velit",
                Poster = "http://www.webpark.ru/uploads54/121106/Posters_01.jpg"

            });

            context.Films.Add(new Film
            {
                Id = 4,
                Title = "zveniet quod temporibus",
                Description = "Aurehenderit quos placeat\nvelit minima officia doloresita",
                Poster = "https://cdn.pastemagazine.com/www/blogs/lists/2008.jpg"

            });
            context.SaveChanges();
        }

        private void addDefaultComments(FilmsContext context)
        {
            context.Comments.Add(new Comment
            {
                CommentId = 1,
                Text = "comment to 1",
                //User = "1"
            });
            context.Comments.Add(new Comment
            {
                CommentId = 2,
                Text = "comment to 2",
            });
            context.Comments.Add(new Comment
            {
                CommentId = 3,
                Text = "comment to 3",
            });

            context.SaveChanges();
        }

        private void addDefaultImages(FilmsContext context)
        {
            context.FilmsImages.Add(new FilmsImage
            {
                Id = 1,
                Poster = "https://st.kp.yandex.net/im/kadr/3/0/2/kinopoisk.ru-Twin-Peaks-3020658.jpg",
            });

            context.FilmsImages.Add(new FilmsImage
            {
                Id = 2,
                Poster = "http://rankin.co.uk/media/DRU_Subway2Sheet_5P_REV-556x420.jpg"
            });

            context.FilmsImages.Add(new FilmsImage
            {
                Id = 3,
                Poster = "http://www.webpark.ru/uploads54/121106/Posters_01.jpg"
            });
            context.FilmsImages.Add(new FilmsImage
            {
                Id = 4,
                Poster = "https://cdn.pastemagazine.com/www/blogs/lists/2008.jpg"
            });
            context.FilmsImages.Add(new FilmsImage
            {
                Id = 5,
                Poster = "http://images.webpark.ru/uploads54/121106/Posters_15.jpg"
            });
            context.SaveChanges();
        }

    }
}
