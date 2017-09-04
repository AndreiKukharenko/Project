using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmsApp.BLL.DTO
{
    public class ImagesDTO
    {
        public int Id { get; set; }

        public int FilmId { get; set; }

        public string ImageUrl { get; set; }
    }
}
