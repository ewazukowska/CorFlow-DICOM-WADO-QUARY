using Application;
using Domain;
using MediatR;
using Microsoft.AspNetCore;
using Microsoft.EntityFrameworkCore;
using Infrastructure;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    public class DicomController : BaseApiController
    {
        [HttpGet]
        public int GetDicoms()
        {
            return 0;
        }
    }
}
