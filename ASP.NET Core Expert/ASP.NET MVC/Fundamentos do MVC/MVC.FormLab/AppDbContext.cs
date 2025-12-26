using Microsoft.EntityFrameworkCore;
using MVC.FormLab.Models;

namespace MVC.FormLab
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Aluno> Alunos { get; set; }
    }
}
