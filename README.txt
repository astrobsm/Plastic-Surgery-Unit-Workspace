# Plastic Surgery Unit Workspace

## Overview
Plastic Surgery Unit Workspace is a web-based application designed to streamline patient management, surgery scheduling, wound care tracking, and reporting for the Plastic and Reconstructive Surgery Unit at the University of Nigeria Teaching Hospital, Ituku-Ozalla, Enugu State, Nigeria. 

## Features
- **Dashboard:** Overview of upcoming events, patient records, and unit activities.
- **Patient Management:** Unique patient ID, admission/discharge tracking, and editable records.
- **Surgery Scheduling:** Records surgery details, allows pre/post-surgery photo uploads, and sets automated reminders.
- **Wound Care Tracking:** Includes wound location selection, wound images, and dressing schedules.
- **Reminders:** Automatic notifications for surgeries, dressing changes, and follow-ups.
- **Reports & Analytics:** Generates weekly, monthly, quarterly, and annual reports of unit activities.

## Installation
### Prerequisites
- A web server with **PHP and MySQL** (e.g., Apache, Nginx, or XAMPP for local setup).
- Git installed on your computer.

### Steps to Set Up
1. **Clone the Repository**
   ```bash
   git clone https://github.com/astrobsm/Plastic-Surgery-Unit-Workspace.git
   cd Plastic-Surgery-Unit-Workspace
   ```

2. **Setup the Database**
   - Create a MySQL database named `plastic_surgery_db`.
   - Run the SQL script provided in `database.sql` to create necessary tables.

3. **Configure Backend**
   - Edit `backend_api.php` to match your database credentials.
   - Deploy the backend on a **PHP/MySQL-supported hosting** (e.g., Heroku, DigitalOcean, Firebase, or hospital intranet server).

4. **Run the Application**
   - Host the **frontend** using **GitHub Pages**:
     1. Go to the repository settings → Pages.
     2. Select `main` as the deployment branch.
     3. Access the hosted site via `https://your-username.github.io/Plastic-Surgery-Unit-Workspace/`.
   - Alternatively, deploy to a **local or remote server** for full database support.

## Usage
- Log in with your **assigned credentials**.
- Access patient data, schedule surgeries, and track wounds.
- Receive **automated reminders** for critical events.
