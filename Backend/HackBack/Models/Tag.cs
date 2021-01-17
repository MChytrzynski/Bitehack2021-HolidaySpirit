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
        public Tag()
        {

        }
        public Tag(string name)
        {
            Name = name;
        }
    }
}
