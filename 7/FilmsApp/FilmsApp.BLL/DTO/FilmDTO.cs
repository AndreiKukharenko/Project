using FilmsApp.DAL.Models;
using System;
using System.Collections.Generic;

namespace FilmsApp.BLL.DTO
{
    public class FilmDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }

        public string Description { get; set; }

        public string Poster { get; set; }

        public double Rating { get; set; }

        public ImagesDTO Images { get; set; }

        //public ICollection<Comment> Comments { get; set; }
    }
}
