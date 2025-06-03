using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;
using System;

namespace DataAccess
{
    public class Context(IConfiguration configuration) : DbContext
    {
        public IConfiguration Configuration { get; } = configuration;
        public DbSet<Transaction> Transactions { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = Configuration.GetConnectionString("DB");
            var serverVersion = new MySqlServerVersion(new Version(8, 0, 42));

            optionsBuilder.UseMySql(connectionString, serverVersion);
        }
    }
}
