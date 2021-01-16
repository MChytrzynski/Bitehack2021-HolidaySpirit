using HackBack.DataBase;
using HackBack.Models;
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
                    logger.LogInformation("Log: DbService : Creating database instance.");
                    _db.GetCollection<IssueDAO>(_collectionName);
                }
                catch
                {
                    logger.LogInformation("Log: DbService : database instcance creation failsed!");
                }
            }
        }

        public IEnumerable<IssueDAO> FindAll()
        {
            _logger.LogInformation("Log: DbService : FindAll()");
            return _db.GetCollection<IssueDAO>(_collectionName).FindAll();
        }
        public IEnumerable<Tag> FindAllTags()
        {
            _logger.LogInformation("Log: DbService : FindAllTags()");
            HashSet<string> tagsNames = new HashSet<string>();
            List<Tag> tags = new List<Tag>();
            foreach (var issueTags in _db.GetCollection<IssueDAO>(_collectionName).FindAll())
            {
                foreach (var tag in issueTags.Tags)
                {
                    if (tagsNames.Add(tag.Name))
                    {
                        tags.Add(tag);
                    }
                }
            }
            return tags;
        }

        public IssueDAO FindOne(int id)
        {
            _logger.LogInformation("Log: DbService : FindOne()");
            return _db.GetCollection<IssueDAO>(_collectionName).Find(x => x.Id == id).FirstOrDefault();
        }

        public int Insert(IssueDAO newIssue)
        {
            _logger.LogInformation("Log: DbService : Insert()");
            return _db.GetCollection<IssueDAO>(_collectionName).Insert(newIssue);
        }

        public bool Update(IssueDAO issue)
        {
            _logger.LogInformation("Log: DbService : Update()");
            return _db.GetCollection<IssueDAO>(_collectionName).Update(issue);
        }

        public bool Delete(int id)
        {
            _logger.LogInformation("Log: DbService : Delete()");
            return _db.GetCollection<IssueDAO>(_collectionName).Delete(id);
        }
    }
}
