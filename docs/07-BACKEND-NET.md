# 07 - BACKEND .NET - API y Arquitectura

## 📋 Índice

1. [Arquitectura General](#arquitectura-general)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Modelos y Entidades](#modelos-y-entidades)
4. [Controladores y Endpoints](#controladores-y-endpoints)
5. [Servicios](#servicios)
6. [Data Access Layer](#data-access-layer)
7. [Validación y Manejo de Errores](#validación-y-manejo-de-errores)
8. [Email Service](#email-service)
9. [Seguridad](#seguridad)
10. [Testing](#testing)
11. [Deployment](#deployment)

---

## Arquitectura General

### Clean Architecture Pattern

```
┌─────────────────────────────────────────────┐
│          Presentation Layer                 │
│  (Controllers, DTOs, Filters, Middleware)   │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│         Application Layer                   │
│  (Services, Business Logic, Interfaces)     │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│          Domain Layer                       │
│  (Entities, Value Objects, Enums)           │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│       Infrastructure Layer                  │
│  (DbContext, Repositories, External APIs)   │
└─────────────────────────────────────────────┘
```

---

## Estructura del Proyecto

```
IOTechAPI/
├── IOTechAPI.sln
├── src/
│   ├── IOTechAPI.Domain/
│   │   ├── Entities/
│   │   │   ├── Contact.cs
│   │   │   ├── NewsletterSubscription.cs
│   │   │   └── BaseEntity.cs
│   │   ├── Enums/
│   │   │   ├── ContactStatus.cs
│   │   │   └── Industry.cs
│   │   └── IOTechAPI.Domain.csproj
│   │
│   ├── IOTechAPI.Application/
│   │   ├── DTOs/
│   │   │   ├── ContactRequestDto.cs
│   │   │   ├── ContactResponseDto.cs
│   │   │   └── NewsletterSubscriptionDto.cs
│   │   ├── Interfaces/
│   │   │   ├── IEmailService.cs
│   │   │   ├── IContactService.cs
│   │   │   └── INewsletterService.cs
│   │   ├── Services/
│   │   │   ├── ContactService.cs
│   │   │   └── NewsletterService.cs
│   │   ├── Validators/
│   │   │   └── ContactRequestValidator.cs
│   │   └── IOTechAPI.Application.csproj
│   │
│   ├── IOTechAPI.Infrastructure/
│   │   ├── Data/
│   │   │   ├── ApplicationDbContext.cs
│   │   │   ├── Configurations/
│   │   │   │   └── ContactConfiguration.cs
│   │   │   └── Migrations/
│   │   ├── Repositories/
│   │   │   ├── IRepository.cs
│   │   │   └── Repository.cs
│   │   ├── Services/
│   │   │   └── EmailService.cs
│   │   └── IOTechAPI.Infrastructure.csproj
│   │
│   └── IOTechAPI.API/
│       ├── Controllers/
│       │   ├── ContactController.cs
│       │   └── NewsletterController.cs
│       ├── Middleware/
│       │   ├── ExceptionHandlingMiddleware.cs
│       │   └── RequestLoggingMiddleware.cs
│       ├── Filters/
│       │   └── ValidateModelStateFilter.cs
│       ├── Extensions/
│       │   └── ServiceExtensions.cs
│       ├── appsettings.json
│       ├── appsettings.Development.json
│       ├── Program.cs
│       └── IOTechAPI.API.csproj
│
└── tests/
    ├── IOTechAPI.UnitTests/
    │   ├── Services/
    │   │   └── ContactServiceTests.cs
    │   └── IOTechAPI.UnitTests.csproj
    └── IOTechAPI.IntegrationTests/
        └── IOTechAPI.IntegrationTests.csproj
```

---

## Modelos y Entidades

### Domain/Entities/BaseEntity.cs

```csharp
namespace IOTechAPI.Domain.Entities
{
    public abstract class BaseEntity
    {
        public int Id { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
```

### Domain/Entities/Contact.cs

```csharp
using IOTechAPI.Domain.Enums;

namespace IOTechAPI.Domain.Entities
{
    public class Contact : BaseEntity
    {
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Company { get; set; } = string.Empty;
        public Industry Industry { get; set; }
        public ServiceType Service { get; set; }
        public string Message { get; set; } = string.Empty;
        public ContactStatus Status { get; set; } = ContactStatus.New;
        public string? AssignedTo { get; set; }
        public string? Notes { get; set; }
        public string? IpAddress { get; set; }
        public string? UserAgent { get; set; }
    }
}
```

### Domain/Entities/NewsletterSubscription.cs

```csharp
namespace IOTechAPI.Domain.Entities
{
    public class NewsletterSubscription : BaseEntity
    {
        public string Email { get; set; } = string.Empty;
        public string? Name { get; set; }
        public bool IsActive { get; set; } = true;
        public DateTime? UnsubscribedAt { get; set; }
        public string? UnsubscribeToken { get; set; }
    }
}
```

### Domain/Enums/ContactStatus.cs

```csharp
namespace IOTechAPI.Domain.Enums
{
    public enum ContactStatus
    {
        New = 0,
        InProgress = 1,
        Contacted = 2,
        Qualified = 3,
        Converted = 4,
        Closed = 5,
        Spam = 99
    }
}
```

### Domain/Enums/Industry.cs

```csharp
namespace IOTechAPI.Domain.Enums
{
    public enum Industry
    {
        Government = 1,
        Financial = 2,
        Telecommunications = 3,
        Retail = 4,
        Healthcare = 5,
        Education = 6,
        Manufacturing = 7,
        Other = 99
    }
}
```

### Domain/Enums/ServiceType.cs

```csharp
namespace IOTechAPI.Domain.Enums
{
    public enum ServiceType
    {
        Infrastructure = 1,
        SoftwareDevelopment = 2,
        BusinessIntelligence = 3,
        DigitalExperience = 4,
        Cybersecurity = 5,
        Consulting = 6
    }
}
```

---

## Controladores y Endpoints

### API/Controllers/ContactController.cs

```csharp
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;
using IOTechAPI.Application.DTOs;
using IOTechAPI.Application.Interfaces;

namespace IOTechAPI.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableRateLimiting("fixed")]
    public class ContactController : ControllerBase
    {
        private readonly IContactService _contactService;
        private readonly ILogger<ContactController> _logger;

        public ContactController(
            IContactService contactService,
            ILogger<ContactController> logger)
        {
            _contactService = contactService;
            _logger = logger;
        }

        /// <summary>
        /// Submit a contact form
        /// </summary>
        /// <param name="request">Contact form data</param>
        /// <returns>Success response with request ID</returns>
        [HttpPost]
        [ProducesResponseType(typeof(ContactResponseDto), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ValidationProblemDetails), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status429TooManyRequests)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<ContactResponseDto>> Submit(
            [FromBody] ContactRequestDto request)
        {
            try
            {
                // Capture IP and User Agent
                request.IpAddress = HttpContext.Connection.RemoteIpAddress?.ToString();
                request.UserAgent = HttpContext.Request.Headers["User-Agent"].ToString();

                var response = await _contactService.SubmitContactAsync(request);

                _logger.LogInformation(
                    "Contact form submitted successfully. RequestId: {RequestId}, Email: {Email}",
                    response.RequestId,
                    request.Email);

                return Ok(response);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error processing contact form submission");
                throw;
            }
        }

        /// <summary>
        /// Get contact by ID (admin only - future)
        /// </summary>
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult> GetById(int id)
        {
            // TODO: Implement admin authentication
            var contact = await _contactService.GetContactByIdAsync(id);

            if (contact == null)
                return NotFound();

            return Ok(contact);
        }
    }
}
```

### API/Controllers/NewsletterController.cs

```csharp
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;
using IOTechAPI.Application.DTOs;
using IOTechAPI.Application.Interfaces;

namespace IOTechAPI.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableRateLimiting("fixed")]
    public class NewsletterController : ControllerBase
    {
        private readonly INewsletterService _newsletterService;
        private readonly ILogger<NewsletterController> _logger;

        public NewsletterController(
            INewsletterService newsletterService,
            ILogger<NewsletterController> logger)
        {
            _newsletterService = newsletterService;
            _logger = logger;
        }

        /// <summary>
        /// Subscribe to newsletter
        /// </summary>
        [HttpPost("subscribe")]
        [ProducesResponseType(typeof(NewsletterResponseDto), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<NewsletterResponseDto>> Subscribe(
            [FromBody] NewsletterSubscriptionDto request)
        {
            try
            {
                var response = await _newsletterService.SubscribeAsync(request);

                _logger.LogInformation(
                    "Newsletter subscription: {Email}",
                    request.Email);

                return Ok(response);
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        /// <summary>
        /// Unsubscribe from newsletter
        /// </summary>
        [HttpPost("unsubscribe")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult> Unsubscribe([FromQuery] string token)
        {
            try
            {
                await _newsletterService.UnsubscribeAsync(token);

                _logger.LogInformation("Newsletter unsubscribe: {Token}", token);

                return Ok(new { message = "Te has desuscrito exitosamente." });
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}
```

---

## Servicios

### Application/Interfaces/IContactService.cs

```csharp
using IOTechAPI.Application.DTOs;

namespace IOTechAPI.Application.Interfaces
{
    public interface IContactService
    {
        Task<ContactResponseDto> SubmitContactAsync(ContactRequestDto request);
        Task<ContactDto?> GetContactByIdAsync(int id);
        Task<IEnumerable<ContactDto>> GetAllContactsAsync(int page = 1, int pageSize = 20);
        Task<bool> UpdateContactStatusAsync(int id, ContactStatus status);
    }
}
```

### Application/Services/ContactService.cs

```csharp
using IOTechAPI.Application.DTOs;
using IOTechAPI.Application.Interfaces;
using IOTechAPI.Domain.Entities;
using IOTechAPI.Domain.Enums;
using IOTechAPI.Infrastructure.Repositories;

namespace IOTechAPI.Application.Services
{
    public class ContactService : IContactService
    {
        private readonly IRepository<Contact> _contactRepository;
        private readonly IEmailService _emailService;
        private readonly ILogger<ContactService> _logger;

        public ContactService(
            IRepository<Contact> contactRepository,
            IEmailService emailService,
            ILogger<ContactService> logger)
        {
            _contactRepository = contactRepository;
            _emailService = emailService;
            _logger = logger;
        }

        public async Task<ContactResponseDto> SubmitContactAsync(ContactRequestDto request)
        {
            // Create entity from DTO
            var contact = new Contact
            {
                Name = request.Name,
                Email = request.Email,
                Phone = request.Phone,
                Company = request.Company,
                Industry = request.Industry,
                Service = request.Service,
                Message = request.Message,
                IpAddress = request.IpAddress,
                UserAgent = request.UserAgent,
                Status = ContactStatus.New,
                CreatedAt = DateTime.UtcNow
            };

            // Save to database
            await _contactRepository.AddAsync(contact);
            await _contactRepository.SaveChangesAsync();

            // Send notification emails (fire and forget)
            _ = Task.Run(async () =>
            {
                try
                {
                    await _emailService.SendContactNotificationAsync(contact);
                    await _emailService.SendContactAutoReplyAsync(contact);
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "Error sending contact emails for ID {ContactId}", contact.Id);
                }
            });

            return new ContactResponseDto
            {
                Success = true,
                Message = "Gracias por contactarnos. Nos comunicaremos contigo pronto.",
                RequestId = $"REQ-{DateTime.UtcNow.Year}-{contact.Id:D6}"
            };
        }

        public async Task<ContactDto?> GetContactByIdAsync(int id)
        {
            var contact = await _contactRepository.GetByIdAsync(id);

            if (contact == null)
                return null;

            return new ContactDto
            {
                Id = contact.Id,
                Name = contact.Name,
                Email = contact.Email,
                Phone = contact.Phone,
                Company = contact.Company,
                Industry = contact.Industry,
                Service = contact.Service,
                Message = contact.Message,
                Status = contact.Status,
                CreatedAt = contact.CreatedAt
            };
        }

        public async Task<IEnumerable<ContactDto>> GetAllContactsAsync(int page = 1, int pageSize = 20)
        {
            var contacts = await _contactRepository.GetAllAsync();

            return contacts
                .OrderByDescending(c => c.CreatedAt)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .Select(c => new ContactDto
                {
                    Id = c.Id,
                    Name = c.Name,
                    Email = c.Email,
                    Company = c.Company,
                    Status = c.Status,
                    CreatedAt = c.CreatedAt
                });
        }

        public async Task<bool> UpdateContactStatusAsync(int id, ContactStatus status)
        {
            var contact = await _contactRepository.GetByIdAsync(id);

            if (contact == null)
                return false;

            contact.Status = status;
            contact.UpdatedAt = DateTime.UtcNow;

            await _contactRepository.UpdateAsync(contact);
            await _contactRepository.SaveChangesAsync();

            return true;
        }
    }
}
```

---

## Data Access Layer

### Infrastructure/Data/ApplicationDbContext.cs

```csharp
using Microsoft.EntityFrameworkCore;
using IOTechAPI.Domain.Entities;

namespace IOTechAPI.Infrastructure.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Contact> Contacts { get; set; }
        public DbSet<NewsletterSubscription> NewsletterSubscriptions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Apply configurations
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            // Set timestamps
            var entries = ChangeTracker.Entries<BaseEntity>();

            foreach (var entry in entries)
            {
                if (entry.State == EntityState.Added)
                {
                    entry.Entity.CreatedAt = DateTime.UtcNow;
                }
                else if (entry.State == EntityState.Modified)
                {
                    entry.Entity.UpdatedAt = DateTime.UtcNow;
                }
            }

            return base.SaveChangesAsync(cancellationToken);
        }
    }
}
```

### Infrastructure/Data/Configurations/ContactConfiguration.cs

```csharp
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using IOTechAPI.Domain.Entities;

namespace IOTechAPI.Infrastructure.Data.Configurations
{
    public class ContactConfiguration : IEntityTypeConfiguration<Contact>
    {
        public void Configure(EntityTypeBuilder<Contact> builder)
        {
            builder.ToTable("Contacts");

            builder.HasKey(c => c.Id);

            builder.Property(c => c.Name)
                .IsRequired()
                .HasMaxLength(100);

            builder.Property(c => c.Email)
                .IsRequired()
                .HasMaxLength(255);

            builder.Property(c => c.Phone)
                .IsRequired()
                .HasMaxLength(20);

            builder.Property(c => c.Company)
                .IsRequired()
                .HasMaxLength(200);

            builder.Property(c => c.Message)
                .IsRequired()
                .HasMaxLength(2000);

            builder.Property(c => c.AssignedTo)
                .HasMaxLength(100);

            builder.Property(c => c.IpAddress)
                .HasMaxLength(50);

            builder.Property(c => c.UserAgent)
                .HasMaxLength(500);

            // Indexes
            builder.HasIndex(c => c.Email);
            builder.HasIndex(c => c.CreatedAt);
            builder.HasIndex(c => c.Status);
        }
    }
}
```

### Infrastructure/Repositories/IRepository.cs

```csharp
namespace IOTechAPI.Infrastructure.Repositories
{
    public interface IRepository<T> where T : class
    {
        Task<T?> GetByIdAsync(int id);
        Task<IEnumerable<T>> GetAllAsync();
        Task AddAsync(T entity);
        Task UpdateAsync(T entity);
        Task DeleteAsync(T entity);
        Task<int> SaveChangesAsync();
    }
}
```

### Infrastructure/Repositories/Repository.cs

```csharp
using Microsoft.EntityFrameworkCore;
using IOTechAPI.Infrastructure.Data;

namespace IOTechAPI.Infrastructure.Repositories
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly ApplicationDbContext _context;
        private readonly DbSet<T> _dbSet;

        public Repository(ApplicationDbContext context)
        {
            _context = context;
            _dbSet = context.Set<T>();
        }

        public async Task<T?> GetByIdAsync(int id)
        {
            return await _dbSet.FindAsync(id);
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await _dbSet.ToListAsync();
        }

        public async Task AddAsync(T entity)
        {
            await _dbSet.AddAsync(entity);
        }

        public async Task UpdateAsync(T entity)
        {
            _dbSet.Update(entity);
            await Task.CompletedTask;
        }

        public async Task DeleteAsync(T entity)
        {
            _dbSet.Remove(entity);
            await Task.CompletedTask;
        }

        public async Task<int> SaveChangesAsync()
        {
            return await _context.SaveChangesAsync();
        }
    }
}
```

---

## Email Service

### Infrastructure/Services/EmailService.cs

```csharp
using System.Net;
using System.Net.Mail;
using IOTechAPI.Application.Interfaces;
using IOTechAPI.Domain.Entities;
using Microsoft.Extensions.Configuration;

namespace IOTechAPI.Infrastructure.Services
{
    public class EmailService : IEmailService
    {
        private readonly IConfiguration _configuration;
        private readonly ILogger<EmailService> _logger;
        private readonly string _smtpServer;
        private readonly int _smtpPort;
        private readonly string _senderEmail;
        private readonly string _senderName;
        private readonly string _smtpUsername;
        private readonly string _smtpPassword;

        public EmailService(
            IConfiguration configuration,
            ILogger<EmailService> logger)
        {
            _configuration = configuration;
            _logger = logger;

            _smtpServer = _configuration["EmailSettings:SmtpServer"] ?? "";
            _smtpPort = int.Parse(_configuration["EmailSettings:SmtpPort"] ?? "587");
            _senderEmail = _configuration["EmailSettings:SenderEmail"] ?? "";
            _senderName = _configuration["EmailSettings:SenderName"] ?? "";
            _smtpUsername = _configuration["EmailSettings:SmtpUsername"] ?? "";
            _smtpPassword = _configuration["EmailSettings:SmtpPassword"] ?? "";
        }

        public async Task SendContactNotificationAsync(Contact contact)
        {
            var subject = $"Nuevo Contacto - {contact.Company}";

            var body = $@"
                <h2>Nuevo Contacto Recibido</h2>
                <p><strong>Nombre:</strong> {contact.Name}</p>
                <p><strong>Email:</strong> {contact.Email}</p>
                <p><strong>Teléfono:</strong> {contact.Phone}</p>
                <p><strong>Empresa:</strong> {contact.Company}</p>
                <p><strong>Industria:</strong> {contact.Industry}</p>
                <p><strong>Servicio:</strong> {contact.Service}</p>
                <p><strong>Mensaje:</strong></p>
                <p>{contact.Message}</p>
                <hr>
                <p><small>Recibido: {contact.CreatedAt:yyyy-MM-dd HH:mm:ss} UTC</small></p>
            ";

            // Send to sales team
            var recipientEmail = _configuration["EmailSettings:SalesEmail"] ?? "ventas@io-tech.com.mx";

            await SendEmailAsync(recipientEmail, subject, body);
        }

        public async Task SendContactAutoReplyAsync(Contact contact)
        {
            var subject = "Gracias por contactar a IO-TECH";

            var body = $@"
                <h2>Hola {contact.Name},</h2>

                <p>Gracias por ponerte en contacto con IO-TECH. Hemos recibido tu solicitud y uno de nuestros especialistas se comunicará contigo a la brevedad.</p>

                <h3>Resumen de tu solicitud:</h3>
                <ul>
                    <li><strong>Empresa:</strong> {contact.Company}</li>
                    <li><strong>Servicio de interés:</strong> {GetServiceName(contact.Service)}</li>
                </ul>

                <p>Mientras tanto, te invitamos a conocer más sobre nuestros servicios en <a href=""https://io-tech.com.mx"">io-tech.com.mx</a>.</p>

                <p>Saludos cordiales,<br>
                <strong>Equipo IO-TECH</strong><br>
                Soluciones Tecnológicas de Alto Impacto</p>

                <hr>
                <p><small>Este es un mensaje automático, por favor no respondas a este correo.</small></p>
            ";

            await SendEmailAsync(contact.Email, subject, body);
        }

        public async Task SendNewsletterWelcomeAsync(NewsletterSubscription subscription)
        {
            var subject = "Bienvenido al Newsletter de IO-TECH";

            var body = $@"
                <h2>¡Bienvenido {subscription.Name}!</h2>

                <p>Gracias por suscribirte al newsletter de IO-TECH. A partir de ahora recibirás:</p>

                <ul>
                    <li>Artículos sobre transformación digital</li>
                    <li>Casos de éxito y mejores prácticas</li>
                    <li>Novedades en tecnología empresarial</li>
                    <li>Invitaciones exclusivas a webinars</li>
                </ul>

                <p>Síguenos en nuestras redes sociales para más contenido:</p>
                <p>
                    LinkedIn | Twitter | YouTube
                </p>

                <p>Saludos,<br>
                <strong>Equipo IO-TECH</strong></p>

                <hr>
                <p><small>Si deseas darte de baja, <a href=""https://io-tech.com.mx/newsletter/unsubscribe?token={subscription.UnsubscribeToken}"">haz clic aquí</a>.</small></p>
            ";

            await SendEmailAsync(subscription.Email, subject, body);
        }

        private async Task SendEmailAsync(string to, string subject, string body)
        {
            try
            {
                using var client = new SmtpClient(_smtpServer, _smtpPort)
                {
                    Credentials = new NetworkCredential(_smtpUsername, _smtpPassword),
                    EnableSsl = true
                };

                var message = new MailMessage
                {
                    From = new MailAddress(_senderEmail, _senderName),
                    Subject = subject,
                    Body = body,
                    IsBodyHtml = true
                };

                message.To.Add(to);

                await client.SendMailAsync(message);

                _logger.LogInformation("Email sent successfully to {Email}", to);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error sending email to {Email}", to);
                throw;
            }
        }

        private string GetServiceName(ServiceType service)
        {
            return service switch
            {
                ServiceType.Infrastructure => "Infraestructura y Nube",
                ServiceType.SoftwareDevelopment => "Desarrollo de Software",
                ServiceType.BusinessIntelligence => "Inteligencia de Negocio",
                ServiceType.DigitalExperience => "Experiencia Digital",
                ServiceType.Cybersecurity => "Ciberseguridad",
                ServiceType.Consulting => "Consultoría TI",
                _ => "No especificado"
            };
        }
    }
}
```

---

## Validación y Manejo de Errores

### API/Middleware/ExceptionHandlingMiddleware.cs

```csharp
using System.Net;
using System.Text.Json;

namespace IOTechAPI.API.Middleware
{
    public class ExceptionHandlingMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ExceptionHandlingMiddleware> _logger;

        public ExceptionHandlingMiddleware(
            RequestDelegate next,
            ILogger<ExceptionHandlingMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An unhandled exception occurred");
                await HandleExceptionAsync(context, ex);
            }
        }

        private static async Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            context.Response.ContentType = "application/json";

            var response = new
            {
                success = false,
                message = "An error occurred processing your request.",
                details = exception.Message
            };

            context.Response.StatusCode = exception switch
            {
                ArgumentException => (int)HttpStatusCode.BadRequest,
                UnauthorizedAccessException => (int)HttpStatusCode.Unauthorized,
                KeyNotFoundException => (int)HttpStatusCode.NotFound,
                _ => (int)HttpStatusCode.InternalServerError
            };

            var json = JsonSerializer.Serialize(response);
            await context.Response.WriteAsync(json);
        }
    }
}
```

---

## Program.cs (Setup Completo)

```csharp
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.RateLimiting;
using IOTechAPI.Application.Interfaces;
using IOTechAPI.Application.Services;
using IOTechAPI.Infrastructure.Data;
using IOTechAPI.Infrastructure.Repositories;
using IOTechAPI.Infrastructure.Services;
using IOTechAPI.API.Middleware;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new() {
        Title = "IO-TECH API",
        Version = "v1",
        Description = "API para el sitio web de IO-TECH"
    });
});

// Database
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        b => b.MigrationsAssembly("IOTechAPI.Infrastructure")));

// CORS
var allowedOrigins = builder.Configuration.GetSection("CorsOrigins").Get<string[]>() ?? new[] { "*" };
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins(allowedOrigins)
              .AllowAnyMethod()
              .AllowAnyHeader()
              .AllowCredentials();
    });
});

// Rate Limiting
builder.Services.AddRateLimiter(options =>
{
    options.AddFixedWindowLimiter("fixed", opt =>
    {
        opt.PermitLimit = 10;
        opt.Window = TimeSpan.FromMinutes(1);
        opt.QueueProcessingOrder = System.Threading.RateLimiting.QueueProcessingOrder.OldestFirst;
        opt.QueueLimit = 2;
    });
});

// Application Services
builder.Services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
builder.Services.AddScoped<IContactService, ContactService>();
builder.Services.AddScoped<INewsletterService, NewsletterService>();
builder.Services.AddScoped<IEmailService, EmailService>();

// Logging
builder.Logging.AddConsole();
builder.Logging.AddDebug();

// Application Insights (Azure)
builder.Services.AddApplicationInsightsTelemetry(options =>
{
    options.ConnectionString = builder.Configuration["ApplicationInsights:ConnectionString"];
});

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseMiddleware<ExceptionHandlingMiddleware>();

app.UseHttpsRedirection();
app.UseCors();
app.UseRateLimiter();
app.UseAuthorization();
app.MapControllers();

// Health check endpoint
app.MapGet("/health", () => Results.Ok(new { status = "healthy", timestamp = DateTime.UtcNow }));

app.Run();
```

---

## Testing

### UnitTests/Services/ContactServiceTests.cs

```csharp
using Xunit;
using Moq;
using IOTechAPI.Application.Services;
using IOTechAPI.Application.Interfaces;
using IOTechAPI.Application.DTOs;
using IOTechAPI.Infrastructure.Repositories;
using IOTechAPI.Domain.Entities;
using Microsoft.Extensions.Logging;

namespace IOTechAPI.UnitTests.Services
{
    public class ContactServiceTests
    {
        private readonly Mock<IRepository<Contact>> _mockRepository;
        private readonly Mock<IEmailService> _mockEmailService;
        private readonly Mock<ILogger<ContactService>> _mockLogger;
        private readonly ContactService _service;

        public ContactServiceTests()
        {
            _mockRepository = new Mock<IRepository<Contact>>();
            _mockEmailService = new Mock<IEmailService>();
            _mockLogger = new Mock<ILogger<ContactService>>();

            _service = new ContactService(
                _mockRepository.Object,
                _mockEmailService.Object,
                _mockLogger.Object);
        }

        [Fact]
        public async Task SubmitContactAsync_ValidRequest_ReturnsSuccessResponse()
        {
            // Arrange
            var request = new ContactRequestDto
            {
                Name = "Test User",
                Email = "test@example.com",
                Phone = "5512345678",
                Company = "Test Company",
                Industry = Domain.Enums.Industry.Financial,
                Service = Domain.Enums.ServiceType.Infrastructure,
                Message = "Test message"
            };

            _mockRepository.Setup(r => r.AddAsync(It.IsAny<Contact>()))
                .Returns(Task.CompletedTask);

            _mockRepository.Setup(r => r.SaveChangesAsync())
                .ReturnsAsync(1);

            // Act
            var result = await _service.SubmitContactAsync(request);

            // Assert
            Assert.True(result.Success);
            Assert.NotNull(result.RequestId);
            Assert.Contains("REQ-", result.RequestId);

            _mockRepository.Verify(r => r.AddAsync(It.IsAny<Contact>()), Times.Once);
            _mockRepository.Verify(r => r.SaveChangesAsync(), Times.Once);
        }

        [Fact]
        public async Task GetContactByIdAsync_ExistingId_ReturnsContact()
        {
            // Arrange
            var contactId = 1;
            var contact = new Contact
            {
                Id = contactId,
                Name = "Test User",
                Email = "test@example.com"
            };

            _mockRepository.Setup(r => r.GetByIdAsync(contactId))
                .ReturnsAsync(contact);

            // Act
            var result = await _service.GetContactByIdAsync(contactId);

            // Assert
            Assert.NotNull(result);
            Assert.Equal(contactId, result.Id);
            Assert.Equal("Test User", result.Name);
        }

        [Fact]
        public async Task GetContactByIdAsync_NonExistingId_ReturnsNull()
        {
            // Arrange
            _mockRepository.Setup(r => r.GetByIdAsync(It.IsAny<int>()))
                .ReturnsAsync((Contact?)null);

            // Act
            var result = await _service.GetContactByIdAsync(999);

            // Assert
            Assert.Null(result);
        }
    }
}
```

---

## Deployment

### Migrations

```bash
# Add initial migration
dotnet ef migrations add InitialCreate --project src/IOTechAPI.Infrastructure --startup-project src/IOTechAPI.API

# Update database
dotnet ef database update --project src/IOTechAPI.Infrastructure --startup-project src/IOTechAPI.API

# Generate SQL script for production
dotnet ef migrations script --project src/IOTechAPI.Infrastructure --startup-project src/IOTechAPI.API --output migration.sql
```

### Azure Deployment

**Publish profile (Azure App Service):**
```bash
# Publish to folder
dotnet publish src/IOTechAPI.API/IOTechAPI.API.csproj -c Release -o ./publish

# Deploy to Azure (via Azure CLI)
az webapp deployment source config-zip \
  --resource-group io-tech-rg \
  --name io-tech-api \
  --src ./publish.zip
```

---

## Checklist

- [ ] Proyecto estructurado con Clean Architecture
- [ ] Entidades y enums definidos
- [ ] Controllers con documentación
- [ ] Services con lógica de negocio
- [ ] Repository pattern implementado
- [ ] Email service configurado
- [ ] Middleware de error handling
- [ ] Rate limiting configurado
- [ ] CORS configurado
- [ ] Unit tests creados
- [ ] Migrations aplicadas
- [ ] Application Insights configurado
- [ ] Publicado en Azure App Service

---

**Última actualización**: Octubre 2025
**Versión**: 1.0
**Estado**: Backend API completo - Listo para deployment

---

✨ **Backend .NET API - IO-TECH** ✨
