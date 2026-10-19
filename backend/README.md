# Gorkhali Security Services - Django Backend

A robust RESTful API backend built with **Python 3.12**, **Django 5.1**, and **Django REST Framework (DRF)** to power the Gorkhali Security Services website.

---

## 🚀 Features

- **Inquiries & Quote Requests API**: Receive contact form submissions and quote requests directly from the website.
- **Services API**: Dynamically list and manage security services, icons, descriptions, and order.
- **Team API**: Manage leadership, advisors, and corporate management profiles.
- **Testimonials API**: Manage client reviews and ratings.
- **Django Admin Portal**: Full-featured, branded admin interface for reviewing leads, managing services, and changing lead status (`New`, `Contacted`, `Resolved`, `Closed`).
- **CORS Configured**: Ready to communicate with the Vite/React frontend at `http://localhost:5173`.
- **Pre-seeded Data**: Includes management command to seed initial services, team members, and testimonials.

---

## 📁 Project Structure

```text
backend/
├── api/                           # Main API application
│   ├── management/commands/       # Custom commands (e.g. seed_data)
│   ├── migrations/                # Database migration history
│   ├── admin.py                   # Customized Django Admin site
│   ├── models.py                  # ContactInquiry, SecurityService, TeamMember, Testimonial
│   ├── serializers.py             # DRF serializers
│   ├── urls.py                    # API routes (/api/inquiries/, etc.)
│   └── views.py                   # ViewSets & endpoints
├── config/                        # Django project configuration
│   ├── settings.py                # App settings, CORS, DRF config
│   ├── urls.py                    # Root URL router
│   └── wsgi.py                    # WSGI entry point
├── venv/                          # Python virtual environment
├── db.sqlite3                     # SQLite database file
├── manage.py                      # Django management script
├── requirements.txt               # Python package dependencies
└── README.md                      # Documentation
```

---

## 🛠️ Quick Start

### 1. Activate the Virtual Environment

**Windows (PowerShell):**
```powershell
cd backend
.\venv\Scripts\Activate.ps1
```

**Windows (Command Prompt):**
```cmd
cd backend
venv\Scripts\activate.bat
```

### 2. Run Database Migrations (if needed)

```bash
python manage.py migrate
```

### 3. Seed Initial Data (Optional)

```bash
python manage.py seed_data
```

### 4. Start the Backend Server

```bash
python manage.py runserver
```

The server will be live at:
- **API Root**: [http://localhost:8000/api/](http://localhost:8000/api/)
- **Admin Portal**: [http://localhost:8000/admin/](http://localhost:8000/admin/)

---

## 🔐 Admin Portal Credentials

- **URL**: `http://localhost:8000/admin/`
- **Username**: `admin`
- **Password**: `admin123`
*(You can change the password at any time inside the admin dashboard or via `python manage.py changepassword admin`)*

---

## 📡 API Endpoints Reference

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/` | API index & overview |
| `GET` | `/api/services/` | List all active security services |
| `GET` | `/api/services/<slug>/` | Get details of a specific service |
| `GET` | `/api/team/` | List active team members |
| `GET` | `/api/testimonials/` | List published testimonials |
| `POST` | `/api/inquiries/` | Submit a contact or quote inquiry |
| `GET` | `/api/inquiries/` | List inquiries (Admin / Staff) |

### Sample Inquiry POST Payload:
```json
{
  "full_name": "John Doe",
  "email": "john@example.com",
  "phone": "+971 50 123 4567",
  "service_type": "vip",
  "message": "We require VIP close protection for an upcoming summit in Dubai."
}
```

Allowed `service_type` values:
- `vip` (VIP Bodyguard)
- `event` (Event Security)
- `bouncer` (Club Bouncer)
- `residence` (Residence Security)
- `general` (General Security)
- `other` (Other Inquiry)
