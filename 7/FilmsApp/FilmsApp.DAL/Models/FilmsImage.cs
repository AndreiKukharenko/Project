using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace FilmsApp.DAL.Models
{
    /// <summary>
    /// 
    /// </summary>
    public class FilmsImage : BaseEntity
    {
        public Film RelatedFilm {get;set;}

        [ForeignKey(nameof(RelatedFilm))]
        public int FilmId { get; set; }

        public string ImageUrl { get; set; }
    }
}