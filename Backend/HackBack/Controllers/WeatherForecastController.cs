using HackBack.Models.WeatherForecast;
using HackBack.Services.DataBase;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HackBack.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;
        private readonly IDbService _forecastDbService;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, IDbService forecastDbService)
        {
            _forecastDbService = forecastDbService;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            _logger.LogInformation("WeatherForecastController : Get()");
            return new JsonResult(_forecastDbService.FindAll());
        }

        [HttpPost]
        public IActionResult Insert(WeatherForecastDAO dto)
        {
            _logger.LogInformation("WeatherForecastController : Insert()");
            var id = _forecastDbService.Insert(dto);
            if (id != default)
                return new JsonResult(_forecastDbService.FindOne(id));
            else
                return BadRequest();
        }

        [HttpPut]
        public IActionResult Update(WeatherForecastDAO dto)
        {
            _logger.LogInformation("WeatherForecastController : Update()");
            var result = _forecastDbService.Update(dto);
            if (result)
                return NoContent();
            else
                return NotFound();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _logger.LogInformation("WeatherForecastController : Delete()");
            var result = _forecastDbService.Delete(id);
            if (result)
                return NoContent();
            else
                return NotFound();
        }
    }
}
