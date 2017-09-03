using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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

        public string Text { get; set; }
    }
}
