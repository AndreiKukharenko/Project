using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FilmsApp.DAL.Models
{
    /// <summary>
    /// 
    /// </summary>
    public class Film : BaseEntity
    {
        [MinLength(2), MaxLength(50)]
        [Required]
        public string Title { get; set; }

        [MinLength(10), MaxLength(300)]
        public string Description { get; set; }

        [Required]
        public string Poster { get; set; }

        public double Rating { get; set; }
        
        public virtual ICollection<FilmsImage> Images { get; set; }

        public virtual ICollection<Comment> Comments { get; set; }
    }
}