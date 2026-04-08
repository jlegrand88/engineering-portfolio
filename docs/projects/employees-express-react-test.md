---
sidebar_label: 'React + Express Test'
title: 'Employees: React & Express Tech Challenge'
sidebar_position: 2
---

:::info[Live Project]
🚀 **Live Demo:** [jlegrand88.github.io/employees-react-express-test/](https://jlegrand88.github.io/employees-react-express-test/)
:::

**Goal:** A technical challenge focused on building a scalable Fullstack boilerplate using a Monorepo architecture, showcasing production-ready integration between React and Express.

### 🚀 Tech Stack
- **Frontend:** React 18 / Next.js 14 (Static Export) with TypeScript.
- **UI Components:** **Ant Design (AntD)** for enterprise-grade interface elements.
- **Backend:** Express.js (Node.js) REST API.
- **State Management:** Zustand (Store-based reactive state).
- **CI/CD & DevOps:** GitHub Actions + **Husky & Lint-Staged** for pre-commit quality control.

### 🏗️ Architecture & Decisions
- **NPM Workspaces:** Monorepo setup to manage frontend and backend dependencies in a single source of truth.
- **Deterministic Deployment:** Hybrid hosting with GitHub Pages for the static frontend and Render.com for the live API.
- **Strict Typing:** End-to-end TypeScript implementation for enhanced maintainability.

### 🛠️ Key Technical Challenges
- **CI/CD Variable Injection:** Solving environment variable persistence during static builds via GitHub Secrets.
- **Quality Gate:** Automating code style and linting before commits to ensure a clean, standardized codebase.
- **CORS Management:** Secure communication between distributed cloud services.

### 🧪 Quality & Roadmap (In Progress)
- **Unit Testing:** Integrating **Jest & Supertest** for backend logic validation.
- **Persistence:** Moving from mock data to a PostgreSQL instance.

---