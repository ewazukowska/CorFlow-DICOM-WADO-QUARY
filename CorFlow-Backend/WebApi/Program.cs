using Application;
using Application.Interfaces;
using Infrastructure;
using Infrastructure.Data;
using Infrastructure.Repositories;
using JsonApiDotNetCore.Configuration;
using Microsoft.EntityFrameworkCore;
using Presentation;
using Serilog;

internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);


        //builder.Services.AddDbContext<ApplicationDbContext>(options =>
        //    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

        builder.Services.AddDbContext<DummyDbContext>(options =>
            options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

        builder.Services.AddHealthChecks()
          .AddSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));

        /*
        builder.Services.AddJsonApi<ApplicationDbContext>(options =>
        {
            options.Namespace = "api";
            options.UseRelativeLinks = true;
            options.AllowUnknownQueryStringParameters = true;
        });
        */

        //builder.Services.AddScoped<ILesionService, LesionService>();
        builder.Services.AddScoped<IDummyService, DummyService>();
        builder.Services.AddControllers();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        builder.Services
            .AddApplication()
            .AddInfrastructure()
            .AddPresentation();

        builder.Host.UseSerilog((context, configuration) =>
            configuration.ReadFrom.Configuration(context.Configuration));

       // builder.Services.AddJsonApi<ApplicationDbContext>();

        var app = builder.Build();

        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseCors("CorsPolicy");
        app.UseSerilogRequestLogging();
        app.UseHttpsRedirection();
        app.UseAuthorization();
        app.MapControllers();

        app.Run();
    }
}