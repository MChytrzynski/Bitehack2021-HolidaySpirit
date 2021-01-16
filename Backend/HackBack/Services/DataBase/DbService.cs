using HackBack.DataBase;
using LiteDB;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HackBack.Services.DataBase
{
    public class DbService : IDbService
    {
        private LiteDatabase _db;
        private readonly IConfiguration _configuration;
        private readonly string _collectionName;
        ILogger<DbService> _logger;

        public DbService(ILiteDbContext liteDbContext, IConfiguration configuration, ILogger<DbService> logger)
        {
            _db = liteDbContext.database;
            _configuration = configuration;
            _collectionName = _configuration.GetValue<string>("LiteDbOptions:CollectionName");
            _logger = logger;

            if (_db is null)
            {
                try
                {
                    logger.LogInformation("DbService : Creating database instance.");
                    _db.GetCollection<WeatherForecastDAO>(_collectionName);
                }
                catch
                {
                    logger.LogInformation("DbService : database instcance creation failsed!");
                }
            }
        }

        public IEnumerable<WeatherForecastDAO> FindAll()
        {
            _logger.LogInformation("DbService : FindAll()");
            return _db.GetCollection<WeatherForecastDAO>(_collectionName).FindAll();
        }

        public WeatherForecastDAO FindOne(int id)
        {
            _logger.LogInformation("DbService : FindOne()");
            return _db.GetCollection<WeatherForecastDAO>(_collectionName).Find(x => x.Id == id).FirstOrDefault();
        }

        public int Insert(WeatherForecastDAO forecast)
        {
            _logger.LogInformation("DbService : Insert()");
            return _db.GetCollection<WeatherForecastDAO>(_collectionName).Insert(forecast);
        }

        public bool Update(WeatherForecastDAO forecast)
        {
            _logger.LogInformation("DbService : Update()");
            return _db.GetCollection<WeatherForecastDAO>(_collectionName).Update(forecast);
        }

        public bool Delete(int id)
        {
            _logger.LogInformation("DbService : Delete()");
            return _db.GetCollection<WeatherForecastDAO>(_collectionName).Delete(id);
        }
    }
}
