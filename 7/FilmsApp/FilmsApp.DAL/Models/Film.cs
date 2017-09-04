using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FilmsApp.DAL.Models
{
    /// <summary>
    /// 
    /// </summary>
    public class Film : BaseEntity
    {
        /// <summary>
        /// 
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Poster { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public double Rating { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public virtual ICollection<FilmsImage> Images { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public virtual ICollection<Comment> Comments { get; set; }
    }
}