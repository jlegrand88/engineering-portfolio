---
sidebar_label: 'DevOps'
title: 'DevOps'
sidebar_position: 3
---

## CI/CD y Automatización

- Pipelines de CI/CD con GitHub Actions
  - Builds y despliegues automatizados
  - Flujos basados en entorno
- Control de calidad de código
  - Linting y formateo automático
  - Hooks de pre-commit con Husky
- Testing automatizado
  - Tests unitarios e integración
  - Pipelines fail-fast para reducir consumo innecesario de recursos
- Flujos de branching y releases
  - Desarrollo basado en Pull Requests
  - Validaciones automáticas antes del merge

## Contenedores y Entornos

- Docker para desarrollo y despliegue
  - Estandarización de entornos locales
  - Reducción de errores tipo “funciona en mi máquina”
- Configuración por entorno
  - Manejo de secretos y variables
  - Paridad entre local, staging y producción

## Cloud y Plataformas

### Google Cloud Platform (GCP)

- Cómputo y Hosting
  - Compute Engine (máquinas virtuales)
  - App Engine (hosting administrado de aplicaciones)
  - Cloud Functions (workloads serverless orientados a eventos)

- Redes
  - Virtual Private Cloud (VPC)
  - Comunicación privada entre servicios

- Bases de datos y almacenamiento
  - Cloud SQL (MySQL / PostgreSQL)
  - Cloud Firestore
  - Cloud Storage

- Despliegues y Operación
  - Despliegues por entorno
  - Conectividad segura entre servicios y bases de datos
  - Configuración mediante variables de entorno


### Amazon Web Services (AWS)

- Cómputo y Hosting
  - EC2 (servidores virtuales)
  - AWS Lambda (funciones serverless orientadas a eventos)

- Almacenamiento
  - S3 (object storage)

- Bases de datos
  - RDS (bases de datos relacionales)
  - DynamoDB (NoSQL)

- Redes
  - Configuración de VPC
  - Comunicación segura entre servicios

## Monitoreo y Mantenimiento

- Inspección de logs y debugging
- Monitoreo básico de performance
- Resolución de incidentes

## Documentación y Redacción Técnica

- Especificaciones OpenAPI / Swagger
- Generación automática de documentación desde anotaciones en código (PHP / Node)
- MkDocs para documentación técnica
- Docusaurus para sitios de documentación estructurados
- Documentación basada en Markdown
- Sincronización entre documentación e implementación
