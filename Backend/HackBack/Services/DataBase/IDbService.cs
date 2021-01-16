using System.Collections.Generic;

namespace HackBack.Services.DataBase
{
    public interface IDbService
    {
        bool Delete(int id);
        IEnumerable<WeatherForecastDAO> FindAll();
        WeatherForecastDAO FindOne(int id);
        int Insert(WeatherForecastDAO forecast);
        bool Update(WeatherForecastDAO forecast);
    }
}