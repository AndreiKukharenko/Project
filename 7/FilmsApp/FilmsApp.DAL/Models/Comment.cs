using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmsApp.DAL.Models
{
    /// <summary>
    /// 
    /// </summary>
    public class Comment : BaseEntity
    {
        public ApplicationUser User { get; set; }

        public Film RelatedFilm { get; set; }

        [ForeignKey(nameof(RelatedFilm))]
        public int FilmId { get; set; }

        public string Text { get; set; }
    }
}
