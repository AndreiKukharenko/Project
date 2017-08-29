using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FilmsApp.DAL.Models
{
    /// <summary>
    /// 
    /// </summary>
    public class User : BaseEntity
    {
        /// <summary>
        /// Users first name
        /// </summary>
        public string FirstName { get; set; }

        /// <summary>
        /// Users last name
        /// </summary>
        public string LastName { get; set; }

        /// <summary>
        /// Users login (nickname)
        /// </summary>
        public string Login { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Password { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public DateTime? BirthDate { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string PhoneNumber { get; set; }
    }
}