# Contributing to VeinVision

Thank you for your interest in contributing to **VeinVision**! We welcome contributions from developers, researchers, and healthcare technology enthusiasts.

Please take a moment to review this guide to keep the contribution process smooth and effective.

---

## 📋 Code of Conduct

We are committed to providing a welcoming, inclusive, and harassment-free environment for everyone. Please be respectful and constructive in all discussions, issues, and pull requests.

---

## 🛠️ How to Contribute

### 1. Reporting Bugs
- Before submitting an issue, search the [existing issues](https://github.com/Zvaishali28/vein-vision/issues) to avoid duplicates.
- Use the **Bug Report** issue template and include detailed reproduction steps, logs, OS version, and environment details.

### 2. Suggesting Enhancements
- Open an issue using the **Feature Request** template.
- Clearly describe the use case, clinical/technical rationale, and proposed implementation.

### 3. Submitting Pull Requests (PRs)
1. **Fork** the repository and create your branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. **Set up** the development environment (see [Getting Started](README.md#getting-started)).
3. **Make your changes** cleanly with clear, self-contained commits.
4. **Validate** your changes:
   ```bash
   # Type check frontend
   npx tsc --noEmit

   # Lint frontend
   npm run lint

   # Build frontend
   npm run build

   # Validate backend Python code
   python -m compileall backend/
   ```
5. **Commit** using standard conventional commit messages:
   - `feat: add doppler sensor graph in wearable dashboard`
   - `fix: resolve patient id validation in report endpoint`
   - `docs: update environment setup instructions`
   - `refactor: optimize frangi vessel filter computation`
6. **Push** to your fork and submit a **Pull Request** targeting `main`.

---

## 💻 Development Guidelines

### Frontend (Next.js & React)
- Follow standard TypeScript and React best practices.
- Use Tailwind CSS utility classes; align with existing navy/medical color tokens defined in `tailwind.config.js`.
- Keep components modular and reusable under `components/`.
- Ensure all pages and components build cleanly with zero TypeScript and ESLint errors.

### Backend (FastAPI & Computer Vision)
- Follow PEP 8 style guidelines.
- Use type hints wherever possible (`typing`, Pydantic models).
- Keep API routes grouped logically and document parameters for Swagger/OpenAPI.
- Ensure all sensitive keys, credentials, and tokens are read exclusively from environment variables (`backend/config.py`). Never commit secrets.

---

## 🔒 Security Vulnerabilities

If you discover a security vulnerability or exposed credentials, please do **not** open a public issue. Instead, report it privately to the maintainers at `nilaykhangar9@gmail.com`.

---

## 📄 License

By contributing to VeinVision, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).

