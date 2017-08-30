using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmsApp.DAL.ViewModels
{
    public class UserRegistrationViewModel
    {
        [Display(Name ="FirstName")]
        public string FirstName { get; set; }

        /// <summary>
        /// Users last name
        /// </summary>
        [Display(Name ="LastName")]
        public string LastName { get; set; }

        /// <summary>
        /// Users login (nickname)
        /// </summary>
        [Required]
        [Display(Name ="Your login")]
        public string Login { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [Required(ErrorMessage = "Password is required")]
        [Display(Name ="Password")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [Required(ErrorMessage ="Confirm your password")]
        [Display(Name = "Confirm password")]
        [DataType(DataType.Password)]
        [Compare("Password")]
        public string ConfirmPassword { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [Display(Name ="E-mail")]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [Display(Name="Birthday")]
        [DataType(DataType.DateTime)]
        [DisplayFormat(DataFormatString = "{0:dd.MM.yyyy}", ApplyFormatInEditMode = true)]
        public DateTime? BirthDate { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [Display(Name = "Phone number")]
        [DataType(DataType.PhoneNumber)]
        public string PhoneNumber { get; set; }
    }
}
