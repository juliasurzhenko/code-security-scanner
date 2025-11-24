using Microsoft.AspNetCore.Mvc;
using SecurityAnalyzer.Api.Models.DTOs;

namespace SecurityAnalyzer.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AnalysisController : ControllerBase
    {
        [HttpPost("upload")]
        public IActionResult UploadCode([FromBody] AnalysisRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Code))
                return BadRequest("Code is empty");

            // TODO: integrate CodeAnalyzerService
            return Ok(new { message = "Received", length = request.Code.Length });
        }
    }
}
