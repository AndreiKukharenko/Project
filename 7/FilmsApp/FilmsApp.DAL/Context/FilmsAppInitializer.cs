using FilmsApp.DAL.Context;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
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
            addDefaultUsers(context);
            addDefaultFilms(context);
            addDefaultComments(context);
            addDefaultImages(context);
        }

        private void addDefaultUsers(FilmsContext context)
        {
            var store = new UserStore<ApplicationUser>(context);
            var manager = new UserManager<ApplicationUser>(store);
            ApplicationUser newUser1 = new ApplicationUser {
                FirstName = "first user",
                LastName = "lastname",
                Email = "asd@mail.com",
                UserName = "test1",
                Password = "qwerty1"
            };
            ApplicationUser newUser2 = new ApplicationUser
            {
                FirstName = "second user",
                LastName = "lastName",
                Email = "aqwe@mail.com",
                UserName = "test",
                Password = "qwerty2"
            };
            manager.Create(newUser1);
            manager.Create(newUser2);
            context.SaveChanges();
        }

        private void addDefaultFilms(FilmsContext context)
        {
            context.Films.Add(new Film
            {
                Id = 1,
                Title = "film: sunt aut facere repellat",
                Description = "quia et suscipit\nsuscipit recusandae consequuntur expedita et cu",
                Poster = "https://st.kp.yandex.net/im/kadr/3/0/2/kinopoisk.ru-Twin-Peaks-3020658.jpg",
                Rating = 5
            });

            context.Films.Add(new Film
            {
                Id = 2,
                Title = "Aut facere repellat",
                Description = "Aut facere repellatAut facere repellat",
                Poster = "http://rankin.co.uk/media/DRU_Subway2Sheet_5P_REV-556x420.jpg",
                Rating = 3.9,
            });

            context.Films.Add(new Film
            {
                Id = 3,
                Title = "suscipit perspiciatis velit",
                Description = "Aut suscipit perspiciatis velit",
                Poster = "http://www.webpark.ru/uploads54/121106/Posters_01.jpg",
                Rating = 1
            });

            context.Films.Add(new Film
            {
                Id = 4,
                Title = "Pveniet quod temporibus",
                Description = "Aurehenderit quos placeat\nvelit minima officia doloresita",
                Poster = "https://cdn.pastemagazine.com/www/blogs/lists/2008.jpg",
                Rating = 5
            });
            context.Films.Add(new Film
            {
                Id = 5,
                Title = "Bgeniet quod temporibus",
                Description = "Aurehendeminima officia doloredsdgsi ta",
                Poster = "https://68.media.tumblr.com/bd5ba144c5439ce5144c77a2cf284819/tumblr_oh7o1lIL0B1r8n53qo1_1280.jpg",
                Rating = 4
            });
            context.Films.Add(new Film
            {
                Id = 6,
                Title = "Bsearch quod temporibus",
                Description = "Cvhendeminima officia doloredsdgsi ta",
                Poster = "https://upload.wikimedia.org/wikipedia/ru/archive/c/cf/20090517000555%21The_Invasion_film_poster_%28ru%29.jpg",
                Rating = 3.1
            });
            context.SaveChanges();
        }

        private void addDefaultComments(FilmsContext context)
        {
            context.Comments.Add(new Comment
            {
                CommentId = 1,
                Text = "comment to 1",
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
        }

    }
}
