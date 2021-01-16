﻿using HackBack.Models;
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
        private readonly IDbService _forecastDbService;

        public IssuesController(ILogger<IssuesController> logger, IDbService forecastDbService)
        {
            _forecastDbService = forecastDbService;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            _logger.LogInformation("Log: IssuesController : Get()");
            return new JsonResult(_forecastDbService.FindAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            _logger.LogInformation("Log: IssuesController : GetById()");
            return new JsonResult(_forecastDbService.FindOne(id));
        }

        [HttpGet]
        [Route("tags")]
        public IActionResult GetTags()
        {
            _logger.LogInformation("Log: IssuesController : GetTags()");
            return new JsonResult(_forecastDbService.FindAllTags());
        }

        [HttpPost]
        public IActionResult Insert(IssueDAO dto)
        {
            _logger.LogInformation("Log: IssuesController : Insert()");
            var id = _forecastDbService.Insert(dto);
            if (id != default)
                return new JsonResult(_forecastDbService.FindOne(id));
            else
                return BadRequest();
        }

        [HttpPut]
        public IActionResult Update(IssueDAO dto)
        {
            _logger.LogInformation("Log: IssuesController : Update()");
            var result = _forecastDbService.Update(dto);
            if (result)
                return NoContent();
            else
                return NotFound();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _logger.LogInformation("Log: IssuesController : Delete()");
            var result = _forecastDbService.Delete(id);
            if (result)
                return NoContent();
            else
                return NotFound();
        }
    }
}
