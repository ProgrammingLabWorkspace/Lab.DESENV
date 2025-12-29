using Microsoft.AspNetCore.Mvc;

namespace Lab.MVC.AppSemTemplate.Components
{
    public class ContadorViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync(int contagemModel) {
            return View(contagemModel);
        }
    }
}
