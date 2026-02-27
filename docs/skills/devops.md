---
sidebar_label: 'DevOps'
title: 'DevOps'
sidebar_position: 3
---

This section presents my experience with infrastructure, CI/CD pipelines, containerization, cloud services, and deployment workflows designed for reliability, scalability, and production environments.

## CI/CD & Automation

- CI/CD pipelines with GitHub Actions
  - Automated builds and deployments
  - Environment-based workflows
- Code quality enforcement
  - Linting and formatting
  - Pre-commit hooks with Husky
- Test automation
  - Unit and integration tests
  - Fail-fast pipelines to reduce wasted CI resources
- Branching and release workflows
  - PR-based development
  - Automated checks before merge

## Containerization & Environments

- Docker for development and deployment
  - Standardized local environments
  - Reduced "works on my machine" issues
- Environment configuration
  - Secrets and variables per environment
  - Local, staging, and production parity

## Cloud & Platforms

### Google Cloud Platform (GCP)

- Compute & Hosting
  - Compute Engine (VM-based workloads)
  - App Engine (managed application hosting)
  - Cloud Functions (serverless, event-driven workloads)

- Networking
  - Virtual Private Cloud (VPC)
  - Private service networking between services

- Databases & Storage
  - Cloud SQL (MySQL / PostgreSQL)
  - Cloud Firestore
  - Cloud Storage

- Deployments & Operations
  - Environment-based deployments
  - Service-to-database connectivity
  - Secure configuration via environment variables


### Amazon Web Services (AWS)

- Compute & Hosting
  - EC2 (virtual servers)
  - AWS Lambda (serverless functions, event-driven execution)

- Storage
  - S3 (object storage)

- Databases
  - RDS (relational databases)
  - DynamoDB (NoSQL)

- Networking
  - VPC configuration
  - Secure service communication


## Monitoring & Maintenance

- Log inspection and debugging
- Basic performance monitoring
- Incident-oriented troubleshooting

## Documentation & Technical Writing

- OpenAPI / Swagger specifications
- API documentation generation from code annotations (PHP / Node)
- MkDocs for technical documentation
- Docusaurus for structured documentation sites
- Markdown-based developer documentation
- Keeping documentation aligned with implementation