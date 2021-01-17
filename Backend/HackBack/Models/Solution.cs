using System.Collections.Generic;

namespace HackBack.Models.Issue
{
    public class Solution
    {
        public Solution()
        {

        }
        public Solution(string content, List<byte[]> attachements, string url, string code)
        {
            Content = content;
            Attachements = attachements;
            Url = url;
            Code = code;
        }

        public string Content { get; set; }
        public List<byte[]> Attachements { get; set; }
        public string Url { get; set; }
        public string Code { get; set; }
    }
}