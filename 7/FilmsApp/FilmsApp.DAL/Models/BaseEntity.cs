using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FilmsApp.DAL.Models
{
    /// <summary>
    /// Base class for entities
    /// </summary>
    public abstract class BaseEntity
    {
        /// <summary>
        /// Unique key
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Soft deleted flag
        /// </summary>
        public bool IsDeleted { get; set; }
    }
}