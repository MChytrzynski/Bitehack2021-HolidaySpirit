using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HackBack.Models
{
    public class Tag
    {
        public string Name { get; set; }
        private ILogger _logger;
        public Tag()
        {

        }
        public Tag(string name, ILogger<Tag> logger)
        {
            Name = name;
            _logger = logger;
        }
        /*public override bool Equals(object obj)
        {
            _logger.LogInformation("Log : tag.Equals()");
            if (obj == null || GetType() != obj.GetType())
            {
                _logger.LogInformation("Log : tag.Equals() 1");
                return false;
            }
            if (Name != null && ((Tag)obj).Name != null)
            {
                _logger.LogInformation("Log : tag.Equals() 2");
                return StringComparer.InvariantCultureIgnoreCase
                             .Equals(Name, ((Tag)obj).Name);
            }
            return base.Equals(obj);
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }*/
    }
}
