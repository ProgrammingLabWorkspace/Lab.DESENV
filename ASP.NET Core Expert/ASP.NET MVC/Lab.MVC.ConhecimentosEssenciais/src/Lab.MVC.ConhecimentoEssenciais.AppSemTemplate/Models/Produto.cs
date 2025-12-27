using System.ComponentModel.DataAnnotations.Schema;

namespace Lab.MVC.AppSemTemplate.Models
{
    [Table("AppSemTemplate_Produtos")]
    public class Produto
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Image { get; set; }
        public string? Valor { get; set; }
    }
}
