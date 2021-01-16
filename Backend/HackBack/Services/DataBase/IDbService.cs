using HackBack.Models.Issue;
using System.Collections.Generic;

namespace HackBack.Services.DataBase
{
    public interface IDbService
    {
        bool Delete(int id);
        IEnumerable<IssueDAO> FindAll();
        IssueDAO FindOne(int id);
        int Insert(IssueDAO forecast);
        bool Update(IssueDAO forecast);
    }
}