# 05 - STACK TECNOLÓGICO - IO-TECH

## 📋 Índice

1. [Resumen del Stack](#resumen-del-stack)
2. [Frontend](#frontend)
3. [Backend (.NET)](#backend-net)
4. [Base de Datos](#base-de-datos)
5. [Hosting e Infraestructura](#hosting-e-infraestructura)
6. [CI/CD y DevOps](#cicd-y-devops)
7. [Monitoreo y Analytics](#monitoreo-y-analytics)
8. [Seguridad](#seguridad)

---

## Resumen del Stack

### Principios de Selección

1. **Simplicidad** - Stack mínimo pero robusto
2. **Performance** - Optimizado para Core Web Vitals
3. **Escalabilidad** - Preparado para crecimiento
4. **Mantenibilidad** - Código claro y documentado
5. **Costo-efectivo** - Balance entre capacidad y presupuesto

### Stack Completo

```
┌─────────────────────────────────────────┐
│            FRONTEND                     │
│  HTML5 + CSS3 + Vanilla JavaScript     │
│  Tailwind CSS (build time)             │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│            BACKEND API                  │
│  ASP.NET Core 8.0 (LTS)                │
│  Entity Framework Core                  │
│  RESTful API                            │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│          BASE DE DATOS                  │
│  SQL Server 2022                        │
│  Redis (cache, opcional)                │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│           HOSTING                       │
│  Azure App Service (backend)            │
│  Netlify / Azure Static Web Apps        │
│  Azure SQL Database                     │
└─────────────────────────────────────────┘
```

---

## Frontend

### HTML5

**Versión:** HTML5 (Living Standard)

**Características usadas:**
- Semantic elements (`<header>`, `<nav>`, `<article>`, `<section>`, `<footer>`)
- `<picture>` y `srcset` para responsive images
- Native `<dialog>` para modals (con polyfill)
- `loading="lazy"` para imágenes
- `<template>` para client-side rendering

**Ejemplo:**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IO-TECH | Soluciones Tecnológicas</title>

  <link rel="stylesheet" href="/assets/css/main.css">
</head>
<body>
  <header>
    <!-- ... -->
  </header>

  <main>
    <article>
      <!-- Content -->
    </article>
  </main>

  <footer>
    <!-- ... -->
  </footer>

  <script src="/assets/js/app.js" type="module"></script>
</body>
</html>
```

---

### CSS3 + Tailwind CSS

**Approach:** Tailwind CSS en build time (NO CDN)

**Setup:**
```json
// package.json (dev dependencies)
{
  "devDependencies": {
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.31",
    "autoprefixer": "^10.4.16",
    "cssnano": "^6.0.1"
  },
  "scripts": {
    "build:css": "tailwindcss -i ./assets/css/input.css -o ./assets/css/main.css --minify",
    "watch:css": "tailwindcss -i ./assets/css/input.css -o ./assets/css/main.css --watch"
  }
}
```

**tailwind.config.js:**
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.html",
    "./components/**/*.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          50: '#e3f7fd',
          100: '#b8ecfa',
          200: '#8be0f7',
          300: '#5ed4f4',
          400: '#3acbf1',
          500: '#27aee5',  // Primary
          600: '#1e9ad0',
          700: '#127abf',  // Accent
          800: '#145f95',
          900: '#174681',  // Dark
          950: '#0f2e56'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
        'mono': ['Fira Code', 'monospace']
      },
      maxWidth: {
        'container': '1280px'
      }
    },
  },
  plugins: [],
}
```

**input.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom components */
@layer components {
  .btn {
    @apply inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200;
  }

  .btn-primary {
    @apply bg-brand-600 text-white hover:bg-brand-700 focus:ring-2 focus:ring-brand-500 focus:ring-offset-2;
  }

  .card {
    @apply bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow;
  }
}

/* Custom utilities */
@layer utilities {
  .text-gradient {
    @apply bg-gradient-to-r from-brand-600 to-brand-900 bg-clip-text text-transparent;
  }
}
```

**Build Output:**
```
assets/css/main.css (minified, ~50KB)
```

---

### JavaScript ES6+

**Versión:** ECMAScript 2022 (ES13)

**Features usadas:**
- ES6 Modules (`import`/`export`)
- Classes
- Arrow functions
- Destructuring
- Template literals
- Async/await
- Optional chaining (`?.`)
- Nullish coalescing (`??`)
- Private class fields (`#`)

**No transpiling** (target: browsers modernos 2020+)

**Polyfills:** Ninguno requerido para target browsers

**Bundling:** Ninguno (usar ES modules nativos)

**Estructura:**
```
assets/js/
├── app.js              # Entry point
├── components/
│   ├── Header.js
│   ├── MobileMenu.js
│   ├── Accordion.js
│   └── ContactForm.js
└── utils/
    ├── dom.js
    ├── validation.js
    └── api.js
```

**Browser Support:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

(~95% de usuarios globales, ~98% en México)

---

## Backend (.NET)

### ASP.NET Core 8.0

**Versión:** .NET 8.0 LTS (soporte hasta Nov 2026)

**Project Structure:**
```
IOTechAPI/
├── IOTechAPI.sln
├── src/
│   ├── IOTechAPI/
│   │   ├── Controllers/
│   │   │   ├── ContactController.cs
│   │   │   └── NewsletterController.cs
│   │   ├── Models/
│   │   │   ├── ContactRequest.cs
│   │   │   └── NewsletterSubscription.cs
│   │   ├── Services/
│   │   │   ├── IEmailService.cs
│   │   │   └── EmailService.cs
│   │   ├── Data/
│   │   │   └── ApplicationDbContext.cs
│   │   ├── appsettings.json
│   │   └── Program.cs
│   └── IOTechAPI.Tests/
└── README.md
```

### API Endpoints

#### 1. Contact Form

**Endpoint:** `POST /api/contact`

**Request:**
```json
{
  "name": "Juan Pérez",
  "email": "juan.perez@empresa.com",
  "phone": "5512345678",
  "company": "Empresa SA de CV",
  "industry": "financiero",
  "service": "infraestructura",
  "message": "Necesitamos migrar a la nube..."
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Gracias por contactarnos. Nos comunicaremos pronto.",
  "requestId": "REQ-2025-001234"
}
```

**Controller:**
```csharp
// Controllers/ContactController.cs
using Microsoft.AspNetCore.Mvc;
using IOTechAPI.Models;
using IOTechAPI.Services;

namespace IOTechAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly IEmailService _emailService;
        private readonly ApplicationDbContext _context;
        private readonly ILogger<ContactController> _logger;

        public ContactController(
            IEmailService emailService,
            ApplicationDbContext context,
            ILogger<ContactController> logger)
        {
            _emailService = emailService;
            _context = context;
            _logger = logger;
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<ContactResponse>> SubmitContact(
            [FromBody] ContactRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                // Save to database
                var contact = new Contact
                {
                    Name = request.Name,
                    Email = request.Email,
                    Phone = request.Phone,
                    Company = request.Company,
                    Industry = request.Industry,
                    Service = request.Service,
                    Message = request.Message,
                    CreatedAt = DateTime.UtcNow,
                    Status = "new"
                };

                _context.Contacts.Add(contact);
                await _context.SaveChangesAsync();

                // Send email notification
                await _emailService.SendContactNotificationAsync(contact);

                // Send auto-reply to user
                await _emailService.SendContactAutoReplyAsync(contact);

                _logger.LogInformation(
                    "Contact form submitted: {RequestId}",
                    contact.Id);

                return Ok(new ContactResponse
                {
                    Success = true,
                    Message = "Gracias por contactarnos. Nos comunicaremos pronto.",
                    RequestId = $"REQ-{DateTime.UtcNow.Year}-{contact.Id:D6}"
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error processing contact form");
                return StatusCode(500, new ContactResponse
                {
                    Success = false,
                    Message = "Ocurrió un error. Por favor intenta nuevamente."
                });
            }
        }
    }
}
```

**Model:**
```csharp
// Models/ContactRequest.cs
using System.ComponentModel.DataAnnotations;

namespace IOTechAPI.Models
{
    public class ContactRequest
    {
        [Required(ErrorMessage = "El nombre es requerido")]
        [StringLength(100)]
        public string Name { get; set; } = string.Empty;

        [Required(ErrorMessage = "El email es requerido")]
        [EmailAddress(ErrorMessage = "Email inválido")]
        public string Email { get; set; } = string.Empty;

        [Required(ErrorMessage = "El teléfono es requerido")]
        [Phone(ErrorMessage = "Teléfono inválido")]
        [StringLength(20)]
        public string Phone { get; set; } = string.Empty;

        [Required(ErrorMessage = "La empresa es requerida")]
        [StringLength(200)]
        public string Company { get; set; } = string.Empty;

        [Required(ErrorMessage = "La industria es requerida")]
        public string Industry { get; set; } = string.Empty;

        [Required(ErrorMessage = "El servicio es requerido")]
        public string Service { get; set; } = string.Empty;

        [Required(ErrorMessage = "El mensaje es requerido")]
        [StringLength(2000)]
        public string Message { get; set; } = string.Empty;
    }

    public class ContactResponse
    {
        public bool Success { get; set; }
        public string Message { get; set; } = string.Empty;
        public string? RequestId { get; set; }
    }
}
```

#### 2. Newsletter Subscription

**Endpoint:** `POST /api/newsletter/subscribe`

**Request:**
```json
{
  "email": "usuario@example.com",
  "name": "Juan Pérez"
}
```

**Response:**
```json
{
  "success": true,
  "message": "¡Gracias por suscribirte!"
}
```

---

### Configuration

**appsettings.json:**
```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "DefaultConnection": "Server=io-tech-db.database.windows.net;Database=IOTechDB;User Id=admin;Password=***;Encrypt=True;"
  },
  "EmailSettings": {
    "SmtpServer": "smtp.sendgrid.net",
    "SmtpPort": 587,
    "SenderEmail": "noreply@io-tech.com.mx",
    "SenderName": "IO-TECH",
    "ApiKey": "***"
  },
  "CorsOrigins": [
    "https://io-tech.com.mx",
    "https://www.io-tech.com.mx"
  ]
}
```

**Program.cs:**
```csharp
var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Database
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// CORS
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins(builder.Configuration.GetSection("CorsOrigins").Get<string[]>())
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

// Custom services
builder.Services.AddScoped<IEmailService, EmailService>();

// Rate limiting (opcional, recomendado)
builder.Services.AddRateLimiter(options =>
{
    options.AddFixedWindowLimiter("fixed", options =>
    {
        options.PermitLimit = 10;
        options.Window = TimeSpan.FromMinutes(1);
    });
});

var app = builder.Build();

// Configure pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors();
app.UseRateLimiter();
app.UseAuthorization();
app.MapControllers();

app.Run();
```

---

## Base de Datos

### SQL Server 2022

**Hosting:** Azure SQL Database

**Tier:** Basic (para MVP), Standard S1 (producción)

**Schema:**

```sql
-- Contacts table
CREATE TABLE Contacts (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(255) NOT NULL,
    Phone NVARCHAR(20) NOT NULL,
    Company NVARCHAR(200) NOT NULL,
    Industry NVARCHAR(50) NOT NULL,
    Service NVARCHAR(50) NOT NULL,
    Message NVARCHAR(MAX) NOT NULL,
    Status NVARCHAR(20) NOT NULL DEFAULT 'new',
    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    UpdatedAt DATETIME2,
    AssignedTo NVARCHAR(100),
    Notes NVARCHAR(MAX),

    INDEX IX_Contacts_CreatedAt (CreatedAt DESC),
    INDEX IX_Contacts_Status (Status),
    INDEX IX_Contacts_Email (Email)
);

-- Newsletter subscriptions
CREATE TABLE NewsletterSubscriptions (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Email NVARCHAR(255) NOT NULL UNIQUE,
    Name NVARCHAR(100),
    Status NVARCHAR(20) NOT NULL DEFAULT 'active',
    SubscribedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    UnsubscribedAt DATETIME2,

    INDEX IX_Newsletter_Email (Email),
    INDEX IX_Newsletter_Status (Status)
);

-- Blog posts (futuro)
CREATE TABLE BlogPosts (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Title NVARCHAR(200) NOT NULL,
    Slug NVARCHAR(200) NOT NULL UNIQUE,
    Content NVARCHAR(MAX) NOT NULL,
    Excerpt NVARCHAR(500),
    FeaturedImage NVARCHAR(500),
    Author NVARCHAR(100) NOT NULL,
    Status NVARCHAR(20) NOT NULL DEFAULT 'draft',
    PublishedAt DATETIME2,
    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    UpdatedAt DATETIME2,

    INDEX IX_BlogPosts_Slug (Slug),
    INDEX IX_BlogPosts_Status (Status),
    INDEX IX_BlogPosts_PublishedAt (PublishedAt DESC)
);
```

### Entity Framework Core

**Migrations:**
```bash
# Create migration
dotnet ef migrations add InitialCreate

# Update database
dotnet ef database update

# Generate SQL script
dotnet ef migrations script
```

---

## Hosting e Infraestructura

### Arquitectura de Deployment

```
┌──────────────────────────────────────────┐
│       Cloudflare (DNS + CDN)             │
└──────────────────────────────────────────┘
                    ↓
        ┌──────────────────┐
        │   Azure Front    │
        │   Door (WAF)     │
        └──────────────────┘
                    ↓
    ┌───────────────────────────────┐
    │                               │
    ↓                               ↓
┌─────────────┐            ┌──────────────┐
│  Frontend   │            │   Backend    │
│  (Netlify)  │            │  (Azure App  │
│  Static     │            │   Service)   │
│  Hosting    │            │              │
└─────────────┘            └──────────────┘
                                   ↓
                           ┌──────────────┐
                           │  Azure SQL   │
                           │  Database    │
                           └──────────────┘
```

### Frontend Hosting: Netlify

**Tier:** Pro ($19/month)

**Features:**
- CDN global (Edge locations)
- Automatic HTTPS
- Instant rollbacks
- Deploy previews
- Build hooks
- Forms (backup option)

**netlify.toml:**
```toml
[build]
  command = "npm run build:css"
  publish = "."

[[redirects]]
  from = "/api/*"
  to = "https://api.io-tech.com.mx/:splat"
  status = 200

[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404

[[headers]]
  for = "/*"
    [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/assets/*"
    [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### Backend Hosting: Azure App Service

**Tier:** B1 Basic (MVP), S1 Standard (Producción)

**Configuration:**
- OS: Linux
- Runtime: .NET 8
- Always On: Yes
- HTTPS Only: Yes
- Min TLS Version: 1.2

**app-service.yaml** (para deployment):
```yaml
name: Deploy to Azure App Service

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: Setup .NET
      uses: actions/setup-dotnet@v3
      with:
        dotnet-version: '8.0.x'

    - name: Restore dependencies
      run: dotnet restore

    - name: Build
      run: dotnet build --configuration Release --no-restore

    - name: Test
      run: dotnet test --no-build --verbosity normal

    - name: Publish
      run: dotnet publish -c Release -o ${{env.DOTNET_ROOT}}/myapp

    - name: Deploy to Azure
      uses: azure/webapps-deploy@v2
      with:
        app-name: 'io-tech-api'
        publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
        package: ${{env.DOTNET_ROOT}}/myapp
```

---

## CI/CD y DevOps

### GitHub Actions

**.github/workflows/frontend.yml:**
```yaml
name: Deploy Frontend

on:
  push:
    branches: [ main ]
    paths:
      - 'pages/**'
      - 'assets/**'
      - 'components/**'

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'

    - name: Install dependencies
      run: npm ci

    - name: Build CSS
      run: npm run build:css

    - name: Deploy to Netlify
      uses: netlify/actions/cli@master
      with:
        args: deploy --prod --dir=.
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

### Environments

1. **Development** (Local)
   - Frontend: Live Server / local HTTP server
   - Backend: `dotnet run`
   - Database: SQL Server Express Local

2. **Staging** (Preview)
   - Frontend: Netlify Deploy Preview
   - Backend: Azure App Service (Staging Slot)
   - Database: Azure SQL Database (Test)

3. **Production**
   - Frontend: Netlify Production
   - Backend: Azure App Service (Production Slot)
   - Database: Azure SQL Database (Production)

---

## Monitoreo y Analytics

### Google Analytics 4

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {
    'anonymize_ip': true,
    'cookie_flags': 'SameSite=None;Secure'
  });
</script>
```

### Azure Application Insights

**Backend monitoring:**
```csharp
// Program.cs
builder.Services.AddApplicationInsightsTelemetry(options =>
{
    options.ConnectionString = builder.Configuration["ApplicationInsights:ConnectionString"];
});
```

### Sentry (Error Tracking)

```javascript
// Frontend
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://xxxx@sentry.io/xxxx",
  environment: "production",
  tracesSampleRate: 0.1,
});
```

---

## Seguridad

### HTTPS Everywhere

- SSL Certificates: Let's Encrypt (auto-renovación)
- HSTS Headers
- Redirect HTTP → HTTPS

### WAF (Web Application Firewall)

**Azure Front Door** o **Cloudflare WAF**

**Reglas:**
- SQL Injection protection
- XSS protection
- Rate limiting
- Geographic restrictions (opcional)

### CORS Configuration

```csharp
// Solo dominios permitidos
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins(
            "https://io-tech.com.mx",
            "https://www.io-tech.com.mx"
        )
        .AllowAnyMethod()
        .AllowAnyHeader();
    });
});
```

### Environment Variables

**Secrets en Azure:**
- Connection strings
- API keys
- Email credentials

**Acceso:**
```csharp
var smtpPassword = builder.Configuration["EmailSettings:SmtpPassword"];
// Nunca hardcodear secrets
```

---

## Costos Estimados (Mensual)

| Servicio | Tier | Costo Aprox. |
|----------|------|--------------|
| Netlify Pro | Pro | $19 USD |
| Azure App Service | B1 Basic | $13 USD |
| Azure SQL Database | Basic (2GB) | $5 USD |
| Azure Application Insights | Basic | $2 USD |
| Cloudflare | Free | $0 |
| Sentry | Developer | $0 (10k errors/mo) |
| SendGrid | Free | $0 (100 emails/day) |
| **Total MVP** | | **~$40 USD/mes** |

**Producción (escalado):**
- Netlify Pro: $19
- Azure App Service S1: $74
- Azure SQL Database Standard: $15
- Otros: $10
- **Total: ~$118 USD/mes**

---

## Checklist de Setup

### Frontend
- [ ] Node.js 18+ instalado
- [ ] Tailwind CSS configurado
- [ ] Build script funcionando
- [ ] ES6 modules setup
- [ ] Netlify cuenta creada
- [ ] Dominio configurado

### Backend
- [ ] .NET 8 SDK instalado
- [ ] SQL Server setup (local/Azure)
- [ ] Entity Framework migrations
- [ ] API funcionando localmente
- [ ] Azure App Service creado
- [ ] Secrets configurados

### DevOps
- [ ] GitHub repository setup
- [ ] CI/CD pipelines configurados
- [ ] Environments (dev/staging/prod)
- [ ] Monitoreo habilitado
- [ ] Error tracking configurado

### Security
- [ ] HTTPS configurado
- [ ] CORS configurado
- [ ] Rate limiting habilitado
- [ ] WAF configurado (opcional)
- [ ] Secrets en vault

---

**Última actualización**: Octubre 2025
**Versión**: 1.0
**Estado**: Stack completo definido - Listo para implementación

---

✨ **Stack Tecnológico IO-TECH - Simple, Robusto, Escalable** ✨
