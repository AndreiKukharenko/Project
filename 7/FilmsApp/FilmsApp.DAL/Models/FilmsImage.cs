using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FilmsApp.DAL.Models
{
    /// <summary>
    /// 
    /// </summary>
    public class FilmsImage 
    {
        public int Id { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Poster { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string[] Screenshots { get; set; }
    }
}