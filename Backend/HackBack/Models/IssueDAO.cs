using System;
using System.Collections.Generic;

namespace HackBack.Models.Issue
{
    public class IssueDAO
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public List<Tag> Tags { get; set; }
        public Solution Solution { get; set; }
        public bool IsPrivate { get; set; }
        public DateTime Date { get; set; }        
    }
}
