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

## Deploying to cPanel / Passenger

The GitHub Actions workflow in `.github/workflows/backend.yml` deploys the
contents of `backend/` to `/home2/drulhaso/api.gssdubai.com/gss_temp/` on pushes
to `master` that change the backend or the workflow. It can also be run manually
from the Actions tab.

Before running it:

1. In cPanel's **Setup Python App**, confirm that the application root is
   `api.gssdubai.com/gss_temp`, with Python 3.12, startup file `passenger_wsgi.py`,
   and entry point `application`.
2. Configure the existing server-side `passenger_wsgi.py` to load this Django
   application, rather than cPanel's sample application:

   ```python
   import os
   import sys

   sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
   from config.wsgi import application
   ```

3. In GitHub **Settings → Secrets and variables → Actions**, set these secrets:
   `SERVER_HOST`, `SERVER_USER`, `SSH_PRIVATE_KEY`, and `SSH_KNOWN_HOSTS`.
   `SSH_KNOWN_HOSTS` must contain the server's verified SSH host-key entry.
4. Add the repository **variable** `BACKEND_VENV_PATH`. Use the directory before
   `/bin/activate` in the activation command cPanel displays. For example, if
   the command is `source /home2/drulhaso/virtualenv/api.gssdubai.com/gss_temp/3.12/bin/activate`,
   the variable is `/home2/drulhaso/virtualenv/api.gssdubai.com/gss_temp/3.12`.
   Use the actual path from cPanel; this is an example.

Uploads use a compressed tar archive over SSH, so `rsync` is not required on
the cPanel server. The server needs `tar` with gzip support and Bash.

Each deployment uploads only backend source, activates the existing server
virtual environment, installs `requirements.txt`, runs Django's system checks
and database migrations, and collects static files. Only after those commands
succeed does it run `mkdir -p tmp` and `touch tmp/restart.txt` in the application
root. Passenger reloads the application on the next request.

Uploads preserve server `.env*` files, virtual environments, SQLite databases,
uploaded media, collected static files, `.htaccess`, `passenger_wsgi.py`, and
`tmp/`. The workflow does not delete remote files. Files removed from the repo
therefore require separate removal on the server. cPanel must already be
configured to serve `staticfiles/` and `media/` at their corresponding URLs.
The workflow activates the virtual environment but does not load `.env` files;
any CLI environment settings must be configured separately.

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
