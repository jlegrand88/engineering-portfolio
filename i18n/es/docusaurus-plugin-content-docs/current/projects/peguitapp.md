---
sidebar_label: 'Peguitapp: Marketplace de Oficios'
title: 'Peguitapp - Fullstack Marketplace'
sidebar_position: 1
---

:::warning[Sitio en Construcción]
🚧 **Aviso:** Este portfolio y sus proyectos asociados (Peguitapp) se encuentran actualmente en desarrollo activo. Es posible que encuentres funciones en fase Beta o elementos visuales en ajuste. ¡Gracias por tu comprensión!
:::

:::tip[Proyecto en Vivo]
🚀 **Puedes ver la aplicación funcionando aquí:** [peguitapp.codewizery.tech](https://peguitapp.codewizery.tech/)
:::

**Meta:** Crear una plataforma robusta y accesible para la gestión de trabajos informales ("peguitas"), conectando solicitantes con trabajadores de forma eficiente y segura.

### 🚀 Stack Tecnológico
- **Frontend:** Nuxt 3 (Vue.js) con SSR para optimización de carga y SEO.
- **Backend:** Laravel 11 (PHP 8.3) actuando como API robusta.
- **Estilos:** Tailwind CSS + DaisyUI para un diseño responsivo y "mobile-first".
- **Real-time:** Integración con Ably para notificaciones y eventos en vivo.
- **Auth:** Fortify para una gestión de sesiones y seguridad de grado industrial.

### 🏗️ Decisiones de Arquitectura
- **Mobile-First & Accesibilidad:** Implementación de componentes personalizados (como el paginador dinámico) para evitar desbordamientos en dispositivos móviles y garantizar la usabilidad mediante estándares ARIA.
- **Event-Driven:** Uso de broadcasting para actualizaciones de postulaciones en tiempo real.
- **Modularidad:** Separación estricta entre la lógica de negocio en el backend y la experiencia de usuario en el frontend, facilitando el mantenimiento.

### 🛠️ Desafíos Técnicos Superados
- **Gestión de Estados Complejos:** Manejo de ciclos de vida de solicitudes (Borrador -> Publicado -> Finalizado) con validaciones personalizadas.
- **Optimización de UX:** Creación de filtros reactivos con `watch` de Vue para permitir búsquedas fluidas por rubro y tipo de trabajo sin recargar la página.

### 📈 Próximos Pasos (Roadmap)
- **Seguridad Avanzada:** Implementación de biometría y geofencing para validación de identidad en el marketplace.
- **AR Integration:** Módulo de asistencia biomecánica mediante Realidad Aumentada para entrenamiento técnico.
- **Testing:** Cobertura total de endpoints con Pest (Laravel) y Vitest (Nuxt).

---