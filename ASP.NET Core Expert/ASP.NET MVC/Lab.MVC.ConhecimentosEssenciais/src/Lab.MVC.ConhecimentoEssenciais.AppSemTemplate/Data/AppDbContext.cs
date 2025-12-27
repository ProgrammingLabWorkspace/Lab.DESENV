using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Lab.MVC.AppSemTemplate.Models;

namespace Lab.MVC.AppSemTemplate.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext (DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<Lab.MVC.AppSemTemplate.Models.Produto> Produto { get; set; } = default!;
    }
}
