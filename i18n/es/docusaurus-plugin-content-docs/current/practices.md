---
title: Buenas Prácticas
sidebar_label: Buenas Prácticas
sidebar_position: 3
---

Esta sección describe los estándares, principios y prácticas de ingeniería que aplico para mantener calidad, consistencia y confiabilidad en los proyectos, tanto individuales como en equipo.

## Buenas Prácticas de Ingeniería

- Clean Code orientado a legibilidad y mantenibilidad.
- Principios SOLID aplicados a diseño de servicios y APIs.
- Separación de responsabilidades.
- Code reviews como parte del flujo de trabajo.
- Testing automatizado (unitario e integración).
- Manejo de configuración por entorno.
- Documentación técnica clara y actualizada.

### Ejemplos reales

- Implementación de hooks de pre-commit con Husky, linting y tests automatizados
  para detectar errores tempranamente y evitar ejecuciones innecesarias de pipelines
  de CI/CD destinadas a fallar, optimizando el uso de recursos.

- Estandarización de entornos de desarrollo mediante Docker,
  garantizando consistencia entre equipos y reduciendo errores
  relacionados con diferencias de configuración local.