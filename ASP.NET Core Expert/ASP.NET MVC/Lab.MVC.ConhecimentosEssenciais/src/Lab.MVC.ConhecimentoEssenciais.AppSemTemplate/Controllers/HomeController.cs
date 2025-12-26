using Microsoft.AspNetCore.Mvc;

namespace Lab.MVC.ConhecimentoEssenciais.AppSemTemplate.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            ViewData["Site.Titulo"] = "Título legal";
            ViewData["Saudacoes"] = "Alo mundo";
            return View();
        }
    }
}
