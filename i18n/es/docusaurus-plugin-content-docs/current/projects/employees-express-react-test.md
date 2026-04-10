---
sidebar_label: 'Test React + Express'
title: 'Employees: Challenge Técnico React & Express'
---

:::info[Proyecto en Vivo]
🚀 **Demo en Vivo:** [jlegrand88.github.io/employees-react-express-test/](https://jlegrand88.github.io/employees-react-express-test/)

🐙 **Repositorio GitHub:** [jlegrand88/employees-react-express-test](https://github.com/jlegrand88/employees-react-express-test)
:::

**Meta:** Un desafío técnico enfocado en construir un boilerplate Fullstack escalable usando arquitectura de Monorepo, demostrando una integración profesional entre React y Express.

### 📸 Media

![Dashboard de Empleados](/img/projects/employees/home.png)
*Vista principal con integración de Ant Design y API REST.*

### 🚀 Stack Tecnológico
- **Frontend:** React 18 / Next.js 14 (Exportación Estática) con TypeScript.
- **UI Components:** **Ant Design (AntD)** para componentes de grado empresarial.
- **Backend:** API REST en Express.js (Node.js).
- **Estado:** Zustand (Gestión de estado reactiva y ligera).
- **CI/CD & DevOps:** GitHub Actions + **Husky & Lint-Staged** para control de calidad pre-commit.

### 🏗️ Arquitectura y Decisiones
- **NPM Workspaces:** Configuración de Monorepo para gestionar dependencias de front y back en una única fuente de verdad.
- **Despliegue Determínistico:** Hosting híbrido usando GitHub Pages para el frontend y Render.com para la API activa.
- **Tipado Estricto:** Implementación de TypeScript de extremo a extremo para mejorar la mantenibilidad.

### 🛠️ Desafíos Técnicos Superados
- **Inyección de Variables en CI/CD:** Resolución de la persistencia de variables de entorno durante builds estáticos mediante GitHub Secrets.
- **Quality Gate:** Automatización de estilos y linting antes de cada commit para asegurar un código limpio y estandarizado.
- **Gestión de CORS:** Comunicación segura entre servicios distribuidos en la nube.

### 🧪 Calidad y Roadmap (En Progreso)
- **Unit Testing:** Integración de **Jest y Supertest** para la validación de lógica de negocio en el backend.
- **Persistencia:** Migración de datos mock a una instancia de PostgreSQL.

### 🖼️ Screenshots

![Dashboard de Empleados](/img/projects/employees/modal.png)
*Modal con integración de Ant Design y API REST.*

![Dashboard de Empleados](/img/projects/employees/skelleton-while-loading.png)
*Skelleton while table loading.*

---