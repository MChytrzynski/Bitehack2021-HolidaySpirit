using HackBack.DataBase;
using HackBack.Models.Issue;
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

        public DbService(IDbContext liteDbContext, IConfiguration configuration, ILogger<DbService> logger)
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
                    _db.GetCollection<IssueDAO>(_collectionName);
                }
                catch
                {
                    logger.LogInformation("DbService : database instcance creation failsed!");
                }
            }
        }

        public IEnumerable<IssueDAO> FindAll()
        {
            _logger.LogInformation("DbService : FindAll()");
            return _db.GetCollection<IssueDAO>(_collectionName).FindAll();
        }

        public IssueDAO FindOne(int id)
        {
            _logger.LogInformation("DbService : FindOne()");
            return _db.GetCollection<IssueDAO>(_collectionName).Find(x => x.Id == id).FirstOrDefault();
        }

        public int Insert(IssueDAO newIssue)
        {
            _logger.LogInformation("DbService : Insert()");
            return _db.GetCollection<IssueDAO>(_collectionName).Insert(newIssue);
        }

        public bool Update(IssueDAO issue)
        {
            _logger.LogInformation("DbService : Update()");
            return _db.GetCollection<IssueDAO>(_collectionName).Update(issue);
        }

        public bool Delete(int id)
        {
            _logger.LogInformation("DbService : Delete()");
            return _db.GetCollection<IssueDAO>(_collectionName).Delete(id);
        }
    }
}
