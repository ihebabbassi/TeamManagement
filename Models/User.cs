using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TeamManagement.Models
{
    public class User
    {
        [Column("UserId")]
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Required]
        public int UserId { get; set; }

        [Column("role")]
        [Required]
        [StringLength(50)]
        public string role { get; set; }

        [Column("firstname")]
        [Required]
        [StringLength(50)]
        public string firstname { get; set; }

        [Column("lastname")]
        [Required]
        [StringLength(50)]
        public string lastname { get; set; }


        [Column("email")]
        [Required]
        [StringLength(50)]
        public string email { get; set; }   


        [Column("password")]
        [Required]
        [StringLength(50)]
        public string password { get; set; }

        public List<Request> Requests { get; set; }
        
        

    }
}
