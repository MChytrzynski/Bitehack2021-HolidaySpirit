using LiteDB;

namespace HackBack.DataBase
{
    public interface IDbContext
    {
        public LiteDatabase database { get; }
    }
}