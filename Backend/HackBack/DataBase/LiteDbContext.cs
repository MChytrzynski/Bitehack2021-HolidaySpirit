using LiteDB;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HackBack.DataBase
{
    public class LiteDbContext : ILiteDbContext
    {
        public LiteDatabase database { get; }
        private readonly IConfiguration _configuration;
        private readonly string _databasePath;
        private const string E_DB_OPTIONS_PATH = "LiteDbOptions:DbLocation";

        public LiteDbContext(IConfiguration configuration)
        {
            _configuration = configuration;
            _databasePath = _configuration.GetValue<string>(E_DB_OPTIONS_PATH);
            database = new LiteDatabase(_databasePath);
        }
    }
}
