using System.Collections.Generic;

namespace HackBack.Models.Issue
{
    public class Solution
    {
        public Solution()
        {

        }
        public Solution(string content, List<byte[]> attachements, List<string> urls, string[] code)
        {
            Content = content;
            Attachements = attachements;
            Urls = urls;
            Code = code;
        }

        public string Content { get; set; }
        public List<byte[]> Attachements { get; set; }
        public List<string> Urls { get; set; }
        public string[] Code { get; set; }
    }
}