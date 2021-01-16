using System;
using System.Collections.Generic;

namespace HackBack.Models.Issue
{
    public class IssueDTO
    {
        public string Username { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public List<Tag> Tags { get; set; }
        public Solution solution { get; set; }
        public bool isPrivate { get; set; }
        public DateTime Date { get; set; }

        public IssueDTO(string username, string title, string content, List<Tag> tags, Solution solution, bool isPrivate, DateTime date)
        {
            Username = username;
            Title = title;
            Content = content;
            Tags = tags;
            this.solution = solution;
            this.isPrivate = isPrivate;
            Date = date;
        }
    }
}
