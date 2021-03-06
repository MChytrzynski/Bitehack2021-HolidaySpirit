﻿using HackBack.Models;
using HackBack.Models.Issue;
using System.Collections.Generic;

namespace HackBack.Services.DataBase
{
    public interface IDbService
    {
        bool Delete(int id);
        IEnumerable<IssueDAO> FindAll();
        IEnumerable<Tag> FindAllTags();
        IssueDAO FindOne(int id);
        int Insert(IssueDAO newIssue);
        bool Update(IssueDAO issue);
    }
}