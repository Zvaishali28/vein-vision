# VeinVision - AI-Powered Varicose Vein Detection & Clinical Decision Support Platform

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.104+-green?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![CI Status](https://img.shields.io/badge/CI-Passing-brightgreen?style=for-the-badge&logo=githubactions)](.github/workflows/ci.yml)

**An intelligent clinical decision support and tele-screening platform combining computer vision, multi-factor risk assessment, IoT wearable telemetry, automated PDF clinical reports, and a multilingual medical assistant.**

[Live Application](http://localhost:3001) • [API Documentation (Swagger UI)](http://localhost:8000/docs) • [ReDoc](http://localhost:8000/redoc) • [Contributing](CONTRIBUTING.md)

</div>

---

## 📌 Table of Contents
- [Problem Statement](#-problem-statement)
- [The Solution](#-the-solution)
- [Key Features](#-key-features)
- [System Architecture](#-system-architecture)
- [Tech Stack](#-tech-stack)
- [Database Schema](#-database-schema)
- [Screenshots & UI Preview](#-screenshots--ui-preview)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Environment Configuration](#environment-configuration)
  - [Backend Setup (FastAPI)](#backend-setup-fastapi)
  - [Frontend Setup (Next.js)](#frontend-setup-nextjs)
- [API Documentation](#-api-documentation)
- [Testing & Quality Assurance](#-testing--quality-assurance)
- [Model Weights & Storage Policy](#-model-weights--storage-policy)
- [Deployment](#-deployment)
- [Future Improvements & Roadmap](#-future-improvements--roadmap)
- [Contributing](#-contributing)
- [Medical Disclaimer](#-medical-disclaimer)
- [License](#-license)

---

## 🩺 Problem Statement

Varicose veins and chronic venous disease affect more than **20% to 30% of adults worldwide**. In many clinical environments and remote healthcare settings:
1. **Delayed Diagnosis**: Patients often ignore early stages (spider veins, reticular veins, mild swelling) until severe complications develop, including chronic edema, venous eczema, lipodermatosclerosis, deep vein thrombosis (DVT), and non-healing venous ulcers.
2. **Limited Access to Vascular Specialists**: Vascular Doppler imaging and duplex ultrasound facilities are often concentrated in tertiary hospitals, creating long wait times for routine triage.
3. **Subjective & Manual Triage**: In-person examinations without standardized quantitative metrics make tracking disease progression across visits difficult.
4. **Language & Education Barriers**: Rural and linguistically diverse populations often lack accessible, plain-language guidance in their native language regarding venous hygiene, compression therapy, and elevation habits.

---

## 💡 The Solution

**VeinVision** provides an end-to-end, accessible, AI-assisted screening platform designed for both patients and healthcare providers:
- **Non-Invasive Image Screening**: Analyzes photographic leg scans through a dual-tier AI pipeline (hosted Roboflow deep learning model with an automatic fallback to high-resolution Frangi vessel ridge detection and morphological segmentation).
- **Comprehensive Risk Scoring**: Evaluates multidimensional clinical factors including BMI, standing hours, family history, pregnancy, and symptom severity.
- **Continuous Telemetry Simulation**: Interfaces with wearable sensor concepts (IMU motion sensors, Doppler blood flow metrics) to monitor leg elevation, mobility, and recovery.
- **Multilingual Clinical Guidance**: Delivers responsive patient education in English, Hindi (हिंदी), and Marathi (मराठी) backed by a curated medical knowledge base.
- **Automated Medical Reporting**: Instantly generates standardized diagnostic PDF summaries suitable for clinician review and medical records.

---

## 🌟 Key Features

### 1. Dual-Tier Computer Vision Pipeline
- **Primary Hosted Inference**: Leverages a Roboflow-trained YOLO object detection model optimized for varicose vein patterns.
- **Medical Frangi Vessel Filter Fallback**: Automatic failover to local image processing using Hessian-matrix Frangi vesselness filters, morphological transformations, and HSV color analysis.
- **Confidence & Severity Scoring**: Quantifies detected vessel surface area, curvature, and discoloration into clinical classifications (*Normal*, *Mild*, *Moderate*, *Severe*).

### 2. Clinical Risk Assessment Tool
- Interactive questionnaires assessing lifestyle, occupational hazards (prolonged sitting/standing), genetic predisposition, and symptom duration.
- Generates dynamic risk percentiles, preventive lifestyle recommendations, and flag indicators for immediate specialist consultation.

### 3. Wearable Device & Telemetry Simulator
- Real-time simulated telemetry for leg elevation angle, daily step counts, stationary standing intervals, and vascular blood flow indices.
- Live alerts recommending compression therapy, positional elevation breaks, and hydration.

### 4. Multilingual Clinical Consultation Bot
- Context-aware medical assistant supporting **English**, **Hindi (हिंदी)**, and **Marathi (मराठी)**.
- Equipped with a vascular disease knowledge base providing answers on symptoms, prevention, diet, exercise, and clinical treatments (sclerotherapy, EVLA, ligation).

### 5. Automated PDF Health Report Generation
- Exports comprehensive clinical diagnostic reports using **FPDF2** on the backend and client-side **jsPDF** export utilities.
- Contains patient demographics, scan findings, severity metrics, risk assessment summaries, and personalized care instructions.

### 6. Clinical Analytics Dashboard
- Aggregated vascular health statistics: total registered patients, scans completed, diagnostic distributions, and average model confidence metrics.
- Historical longitudinal tracking to observe disease regression or progression over time.

---

## 🏗️ System Architecture

```
VeinVision/
├── app/                          # Next.js 16 App Router (React 19)
│   ├── layout.tsx                # Root layout with responsive navigation & theme
│   ├── page.tsx                  # Interactive landing page with feature highlights
│   ├── dashboard/                # Vascular analytics dashboard & patient history
│   ├── vericose/                 # AI scan upload & real-time diagnosis interface
│   ├── risk-assessment/         # Multi-factor clinical risk calculator
│   ├── wearable-monitoring/     # Wearable telemetry & IoT sensor simulator
│   ├── multilingual-assistant/  # Multilingual consultation chatbot (EN, HI, MR)
│   ├── reports/                 # Clinical report viewer & PDF download center
│   ├── about/                   # Project background & medical team overview
│   └── contact/                 # Patient & clinic inquiry form
├── components/                   # Reusable UI component library
│   ├── navbar.tsx               # Responsive header navigation
│   ├── hero.tsx                 # Hero section with animated elements
│   ├── feature.tsx              # Diagnostic feature cards
│   ├── faq.tsx                  # Accessible FAQ accordion
│   ├── cta.tsx                  # Action banners for immediate screening
│   └── footer.tsx               # Footer with clinical disclaimers
├── lib/                         # Client services & API abstraction
│   ├── api.ts                   # Typed Axios API client & endpoints
│   └── supabase.ts              # Optional Supabase cloud client
├── types/                       # TypeScript declaration files
│   └── lucide-react.d.ts        # Type declarations for UI icon system
├── backend/                     # FastAPI Backend Application
│   ├── main.py                  # API router, CORS, rate limiting, endpoints
│   ├── config.py                # Pydantic BaseSettings & environment loader
│   ├── database.py              # SQLAlchemy ORM models, session & schema
│   ├── roboflow_client.py       # Roboflow inference client with retry logic
│   ├── advanced_ml_model.py     # Frangi vessel filter & OpenCV image analysis
│   ├── ml_model.py              # Baseline morphological detector
│   ├── ai_chatbot.py            # Multilingual vascular consultation engine
│   ├── medical_dataset.py       # Curated vascular medical Q&A corpus
│   ├── fpdf_report_generator.py # Lightweight, dependable PDF report generator
│   ├── report_generator.py      # Extended ReportLab PDF builder
│   ├── requirements.txt         # Production backend dependencies
│   ├── requirements-full.txt    # Full development & training dependencies
│   ├── .env.example             # Backend environment template
│   ├── uploads/                 # Temporary upload directory (.gitkeep)
│   └── reports/                 # Generated PDF storage (.gitkeep)
├── public/                      # Static assets, SVG logos, and media
├── .github/                     # GitHub repository configuration
│   ├── workflows/ci.yml         # GitHub Actions automated build & lint CI
│   └── ISSUE_TEMPLATE/          # Bug report & feature request templates
├── .env.example                 # Root environment template
├── .gitignore                   # Tailored git exclusion rules
├── .gitattributes               # Git LFS tracking rules for binary weights
├── CONTRIBUTING.md               # Guidelines for contributors
├── LICENSE                      # MIT Open-Source License
├── package.json                 # Next.js scripts & frontend dependencies
├── requirements.txt             # Root Python requirements reference
├── render.yaml                  # Render deployment blueprint
└── vercel.json                  # Vercel deployment configuration
```

---

## 🛠️ Tech Stack

| Domain | Technology | Purpose |
|---|---|---|
| **Frontend Framework** | **Next.js 16 (App Router)** | High-performance React server and client components |
| **UI Library** | **React 19** | Component-driven user interface |
| **Language** | **TypeScript 5.x** | Type safety across client state and API payloads |
| **Styling** | **Tailwind CSS 3.x** | Dark navy vascular/medical design tokens |
| **Icons** | **Lucide React & React Icons** | Accessible clinical and status icons |
| **Client PDF Export** | **jsPDF** | Client-side diagnostic document export |
| **Backend Framework** | **FastAPI 0.104+** | Asynchronous, OpenAPI-documented REST API |
| **ASGI Server** | **Uvicorn** | High-throughput asynchronous server |
| **Settings Validation** | **Pydantic v2 & Pydantic-Settings** | Type-safe environment variable parsing |
| **Rate Limiting & Cache**| **SlowAPI & Redis / FastAPICache** | Request throttling and endpoint caching |
| **Computer Vision** | **OpenCV (`opencv-python-headless`), SciPy, scikit-image** | Vessel enhancement, Frangi filtering, morphological segmentation |
| **Deep Learning** | **Roboflow Inference API / Ultralytics YOLOv8** | Targeted varicose lesion bounding-box detection |
| **Database & ORM** | **SQLite (local dev) / PostgreSQL & Supabase (prod)** | Relational persistence with SQLAlchemy 2.0 |
| **Backend PDF Engine** | **FPDF2 / ReportLab** | Standardized medical PDF report compilation |

---

## 🗄️ Database Schema

The relational database is managed via **SQLAlchemy ORM** (`backend/database.py`):

```
┌─────────────────┐       1:N       ┌─────────────────┐
│    Patients     │────────────────<│    Analyses     │
│─────────────────│                 │─────────────────│
│ id (PK)         │                 │ id (PK)         │
│ name            │                 │ patient_id (FK) │
│ age             │                 │ image_path      │
│ gender          │                 │ diagnosis       │
│ phone           │                 │ severity        │
│ email           │                 │ confidence      │
│ created_at      │                 │ detection_count │
└────────┬────────┘                 │ affected_area   │
         │                          │ recommendations │
         │                          │ created_at      │
         │                          └────────┬────────┘
         │ 1:N                               │ 1:1
         ├─────────────────┐                 │
         │                 │                 │
┌────────┴────────┐ ┌──────┴────────┐ ┌──────┴────────┐
│ SymptomRecords  │ │  Appointments │ │    Reports    │
│─────────────────│ │───────────────│ │───────────────│
│ id (PK)         │ │ id (PK)       │ │ id (PK)       │
│ patient_id (FK) │ │ patient_id(FK)│ │ patient_id(FK)│
│ pain_level      │ │ doctor_name   │ │ analysis_id(FK│
│ swelling        │ │ scheduled_date│ │ report_type   │
│ cramping        │ │ status        │ │ pdf_path      │
│ ulcers          │ │ notes         │ │ created_at    │
└─────────────────┘ └───────────────┘ └───────────────┘
```

---

## 📸 Screenshots & UI Preview

| AI Scan Upload & Detection | Clinical Risk Assessment |
|:---:|:---:|
| ![AI Scan Upload](https://placehold.co/600x380/0a1128/38bdf8?text=VeinVision+AI+Scan+Analysis) | ![Risk Assessment](https://placehold.co/600x380/0a1128/38bdf8?text=Clinical+Risk+Calculator) |

| Wearable Telemetry & Monitoring | Multilingual Clinical Assistant |
|:---:|:---:|
| ![Wearable Monitoring](https://placehold.co/600x380/0a1128/38bdf8?text=Wearable+Telemetry+Dashboard) | ![Multilingual Assistant](https://placehold.co/600x380/0a1128/38bdf8?text=Multilingual+Medical+Chatbot) |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.18+ or v20+ (with npm)
- **Python**: v3.10+ (v3.11 or v3.12 recommended)
- **Git**

---

### Environment Configuration

1. Clone the repository:
   ```bash
   git clone https://github.com/Zvaishali28/vein-vision.git
   cd vein-vision
   ```

2. Copy the sample environment configuration file:
   ```bash
   cp .env.example .env
   cp .env.example .env.local
   cp backend/.env.example backend/.env
   ```

3. Update the keys in `.env` (or `backend/.env`):
   ```env
   # Backend & Server Settings
   ENVIRONMENT=development
   PORT=8000
   FRONTEND_URL=http://localhost:3001
   DEBUG=true

   # Local Database (SQLite default is ready out of the box)
   DATABASE_URL=sqlite:///./varicose_vein_app.db

   # Roboflow Object Detection (Optional: local OpenCV fallback activates automatically if omitted)
   RF_API_KEY=your_roboflow_api_key_here
   RF_MODEL_ID=varicose-disease-dp898
   RF_VERSION=1

   # Frontend API Endpoint
   NEXT_PUBLIC_API_URL=http://localhost:8000
   NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
   ```

---

### Backend Setup (FastAPI)

1. Open a terminal and enter the `backend/` directory:
   ```bash
   cd backend
   ```

2. Create and activate a Python virtual environment:
   ```bash
   # Windows (PowerShell)
   python -m venv venv
   .\venv\Scripts\Activate.ps1

   # macOS / Linux
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Install backend dependencies:
   ```bash
   pip install --upgrade pip
   pip install -r requirements.txt
   ```

4. Start the FastAPI development server:
   ```bash
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

- **Interactive API Swagger UI**: [http://localhost:8000/docs](http://localhost:8000/docs)
- **Interactive ReDoc Documentation**: [http://localhost:8000/redoc](http://localhost:8000/redoc)
- **Health Check Endpoint**: [http://localhost:8000/health](http://localhost:8000/health)

---

### Frontend Setup (Next.js)

1. Open a second terminal at the project root:
   ```bash
   npm install
   ```

2. Start the development server (configured on port `3001` to prevent backend port conflicts):
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3001
   ```

---

## 📡 API Documentation

| Method | Endpoint | Description | Request Payload / Params |
|---|---|---|---|
| `GET` | `/` | Health check & server status | None |
| `GET` | `/health` | Detailed service & feature statuses | None |
| `POST` | `/predict` | Standalone AI scan prediction (no DB save) | `file`: Image (Multipart Form) |
| `POST` | `/analyze` | Scan analysis, risk classification & persistence | `file`: Image, `patient_id`: int, `language`: string |
| `POST` | `/patients/` | Register a new patient record | JSON: `name`, `age`, `gender`, `email`, `phone` |
| `GET` | `/api/patients/` | Retrieve all registered patients | None |
| `GET` | `/api/analyses` | List recent image analysis records | None |
| `GET` | `/api/dashboard/stats` | Aggregated clinical dashboard metrics | None |
| `POST` | `/generate-report/{patient_id}` | Generate a PDF diagnostic report | Query or Form: `analysis_id` |
| `GET` | `/download-report/{report_id}` | Download generated medical PDF | `report_id`: int |
| `POST` | `/chat` | Multilingual conversational assistant | JSON: `message`, `language`, `session_id` |

---

## 🧪 Testing & Quality Assurance

### Frontend Testing & Verification
```bash
# 1. TypeScript static type checking (zero errors)
npx tsc --noEmit

# 2. ESLint code quality & Next.js rule verification
npm run lint

# 3. Production build test (verifies all 10 App Router routes prerender cleanly)
npm run build
```

### Backend Syntax & Smoke Testing
```bash
# Verify all Python modules compile without syntax errors
python -m compileall backend/

# Run endpoint integration checks (with backend running)
cd backend
python test_analyze_endpoint.py
python test_dataset.py
```

---

## 📦 Model Weights & Storage Policy

- **Lightweight Repository**: Heavy training checkpoint binaries (`*.pth`, `*.pt`, `*.onnx`) and training artifact directories (`runs/`) are excluded from Git commits via `.gitignore` to keep clone speeds fast and respect GitHub repository guidelines.
- **Git LFS Pre-Configured**: If your team chooses to track binary checkpoints directly in Git, `.gitattributes` is pre-configured for Git Large File Storage:
  ```bash
  git lfs install
  git lfs track "*.pth"
  git lfs track "*.pt"
  ```
- **External Model Hosting (Production)**: In production environments, weights should be fetched during CI/CD build or server startup from Hugging Face Model Hub, AWS S3, or Cloudflare R2.

---

## ☁️ Deployment

### Deploy Backend to Render
A `render.yaml` blueprint is included for one-click deployment:
1. Connect your repository to [Render](https://render.com).
2. Create a **New Blueprint Instance**.
3. Supply required environment variables (`RF_API_KEY`, `DATABASE_URL`, `SUPABASE_URL`) in the Render dashboard.

### Deploy Frontend to Vercel
1. Import your repository into [Vercel](https://vercel.com).
2. Set the framework preset to **Next.js**.
3. Set the environment variable `NEXT_PUBLIC_API_URL` to your production backend URL (e.g., `https://veinvision-backend.onrender.com`).
4. Click **Deploy**.

---

## 🔮 Future Improvements & Roadmap

- [ ] **On-Device Edge Inference**: Convert the YOLO model to ONNX Runtime Web / TensorFlow.js for client-side offline screening on mobile devices.
- [ ] **Thermal & NIR Imaging Support**: Integrate near-infrared (NIR) and smartphone thermal camera sensor feeds for deeper sub-dermal vein visualization.
- [ ] **FHIR & HL7 Interoperability**: Implement standard Fast Healthcare Interoperability Resources (FHIR) exports to interface with hospital electronic health record (EHR) systems.
- [ ] **Federated Learning**: Enable privacy-preserving multi-center model refinement without transferring raw clinical images off-premise.
- [ ] **Automated CEAP Classification**: Expand diagnostic categorization to the complete clinical CEAP (Clinical, Etiological, Anatomical, Pathophysiological) vascular staging system (C0 through C6).

---

## 🤝 Contributing

We welcome contributions! Please review our [Contribution Guidelines](CONTRIBUTING.md) for details on code style, commit standards, and the pull request workflow.

---

## ⚠️ Medical Disclaimer

**VeinVision is developed for educational, research, and preliminary clinical screening purposes only.** It is not a certified diagnostic medical device and should not replace professional medical advice, clinical diagnosis, Doppler ultrasound examination, or direct consultation with qualified vascular surgeons and licensed healthcare professionals.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for complete details.
