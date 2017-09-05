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
        public virtual ApplicationUser User { get; set; }

        public virtual Film RelatedFilm { get; set; }

        public int FilmId { get; set; }

        public int UserId { get; set; }

        [MaxLength(20), MinLength(2)]
        public string UserName { get; set; }

        [MaxLength(300), MinLength(2)]
        public string Text { get; set; }
    }
}
