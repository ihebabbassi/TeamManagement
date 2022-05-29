using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TeamManagement.Models
{
    public class Request
    {
        [Column("RequestId")]
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Required]
        public int RequestId { get; set; }

        [Column("Type")]
        [Required]
        [StringLength(50)]
        public string Type { get; set; }

        [Column("Description")]
        [Required]
        [StringLength(50)]
        public string Description { get; set; }

        [Column("Date")]
        [Required]
        [StringLength(50)]
        public string Date { get; set; }

        [Column("Status")]
        [Required]
        [StringLength(50)]
        public string Status { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
        
        
        
    }
}
