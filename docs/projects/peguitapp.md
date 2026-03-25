---
sidebar_label: 'Peguitapp: Gig Economy Marketplace'
title: 'Peguitapp - Fullstack Marketplace'
sidebar_position: 1
---

:::warning[Under Construction]
🚧 **Note:** This portfolio and its featured projects (Peguitapp) are under active development. You may encounter beta features or ongoing visual tweaks. Thanks for your patience!
:::

:::tip[Live Project]
🚀 **Check out the live application here:** [peguitapp.codewizery.tech](https://peguitapp.codewizery.tech/)
:::

**Goal:** To build a robust and accessible platform for managing informal labor ("peguitas"), connecting service seekers with workers efficiently and securely.

### 🚀 Tech Stack
- **Frontend:** Nuxt 3 (Vue.js) featuring SSR for optimized performance and SEO.
- **Backend:** Laravel 11 (PHP 8.3) serving as a robust RESTful API.
- **Styling:** Tailwind CSS + DaisyUI for a responsive, mobile-first design.
- **Real-time:** Ably integration for live notifications and event broadcasting.
- **Auth:** Laravel Fortify for industrial-grade session management and security.

### 🏗️ Architecture Decisions
- **Mobile-First & Accessibility:** Implementation of custom components (such as a dynamic paginator) to prevent overflow on mobile devices and ensure usability through ARIA standards.
- **Event-Driven:** Leveraging broadcasting for real-time application updates.
- **Modularity:** Strict separation of concerns between backend business logic and frontend user experience to ensure maintainability.

### 🛠️ Technical Challenges Overcome
- **Complex State Management:** Managing the lifecycle of work requests (Draft -> Published -> Completed) with custom server-side validations.
- **UX Optimization:** Development of reactive filters using Vue's `watch` to allow seamless searching by industry and work type without page reloads.

### 📈 Roadmap & Next Steps
- **Advanced Security:** Implementing biometric 2FA and geofencing for identity verification within the marketplace.
- **AR Integration:** An Augmented Reality module for biomechanical feedback and sports/technical training.
- **Testing:** Full endpoint coverage using Pest (Laravel) and Vitest (Nuxt).

---