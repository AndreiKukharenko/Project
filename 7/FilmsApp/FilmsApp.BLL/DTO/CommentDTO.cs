using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmsApp.BLL.DTO
{
    public class CommentDTO
    {
        public string UserName { get; set; }

        [MaxLength(300), MinLength(2)]
        public string Text { get; set; }
    }
}
