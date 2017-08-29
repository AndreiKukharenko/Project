using System;
using System.Collections.Generic;
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
        /// <summary>
        /// 
        /// </summary>
        public int CommentId { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public DateTime Date { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public User User { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Text { get; set; }
    }
}
