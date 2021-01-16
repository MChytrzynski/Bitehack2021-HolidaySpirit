using LiteDB;

namespace HackBack.DataBase
{
    public interface ILiteDbContext
    {
        public LiteDatabase database { get; }
    }
}