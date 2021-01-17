using HackBack.Models;
using HackBack.Models.Issue;
using HackBack.Services.DataBase;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;


namespace HackBack.Controllers
{
    [ApiController]
    [Route("api/issues")]
    public class IssuesController : ControllerBase
    {
        private readonly ILogger<IssuesController> _logger;
        private readonly IDbService _dbService;

        public IssuesController(ILogger<IssuesController> logger, IDbService forecastDbService)
        {
            _dbService = forecastDbService;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            _logger.LogInformation("Log: IssuesController : Get()");
            return new JsonResult(_dbService.FindAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            _logger.LogInformation("Log: IssuesController : GetById()");
            return new JsonResult(_dbService.FindOne(id));
        }

        [HttpGet]
        [Route("tags")]
        public IActionResult GetTags()
        {
            _logger.LogInformation("Log: IssuesController : GetTags()");
            return new JsonResult(_dbService.FindAllTags());
        }

        [HttpPost]
        public IActionResult Insert(IssueDAO dto)
        {
            _logger.LogInformation("Log: IssuesController : Insert()");
            var id = _dbService.Insert(dto);
            if (id != default)
                return new JsonResult(_dbService.FindOne(id));
            else
                return BadRequest();
        }

        [HttpPut]
        public IActionResult Update(IssueDAO dto)
        {
            _logger.LogInformation("Log: IssuesController : Update()");
            var result = _dbService.Update(dto);
            if (result)
                return NoContent();
            else
                return NotFound();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _logger.LogInformation("Log: IssuesController : Delete()");
            var result = _dbService.Delete(id);
            if (result)
                return NoContent();
            else
                return NotFound();
        }
        [HttpGet]
        [Route("test")]
        public IActionResult TestGet()
        {
            _logger.LogInformation("IssuesController : TestGet()");
            return new JsonResult(new IssueDTO(
                "TestUser", "TestTitle", "TestContent",
                new System.Collections.Generic.List<Tag>() { new Tag("TestTagName1"), new Tag("TestTagName2") },
                new Solution(
                    "TestSolutionContent",
                    new System.Collections.Generic.List<byte[]>() {
                        System.IO.File.ReadAllBytes("SampleData/sampleImg.png"),
                        System.IO.File.ReadAllBytes("SampleData/sampleImg.png")
                    },
                    "https://www.bitehack.best.krakow.pl/",
                    System.IO.File.ReadAllText("SampleData/sampleCode.js")
                    ),
                false, System.DateTime.Now));
        }
    }
}
