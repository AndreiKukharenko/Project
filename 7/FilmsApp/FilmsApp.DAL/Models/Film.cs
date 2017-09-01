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
        public string  Description { get; set; }

        public string Poster { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public FilmsImage[] Images { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public Comment[] Comments { get; set; }
    }
}