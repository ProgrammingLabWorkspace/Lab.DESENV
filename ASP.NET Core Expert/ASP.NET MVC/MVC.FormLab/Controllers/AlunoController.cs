using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MVC.FormLab.Models;

namespace MVC.FormLab.Controllers
{
    public class AlunoController : Controller
    {
        private AppDbContext DbContext;

        public AlunoController(AppDbContext context)
        {
            DbContext = context;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var alunos = await DbContext.Alunos.ToListAsync();

            return View(alunos);
        }

        public async Task<IActionResult> Detalhes(int id)
        {
            var aluno = await ObterAluno(id);

            return View(aluno);
        }

        [HttpGet]
        public async Task<IActionResult> Criar()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Criar([Bind("Nome,DataNascimento,Email,EmailConfirmacao,Ativo")]Aluno aluno)
        {
            if (!ModelState.IsValid)
            {
                return View(aluno);
            }

            DbContext.Alunos.Add(aluno);
            await DbContext.SaveChangesAsync();

            return View();
        }

        public async Task<Aluno?> ObterAluno(int id)
        {
            return await DbContext.Alunos.FirstOrDefaultAsync(a => a.Id == id);
        }

        [HttpGet]
        public async Task<IActionResult> Editar(int id)
        {
            var aluno = await ObterAluno(id);

            return View(aluno);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Editar(int id, [Bind("Id,Nome,DataNascimento,Email,Ativo")] Aluno aluno)
        {
            if (id != aluno.Id) return NotFound();

            // Não queremos validar esse campo.
            ModelState.Remove("EmailConfirmacao");

            if (!ModelState.IsValid)
            {
                return View(aluno);
            }

            DbContext.Alunos.Update(aluno);
            await DbContext.SaveChangesAsync();

            return RedirectToAction(nameof(Index));
        }
    }
}
