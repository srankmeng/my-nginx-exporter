
# Nginx Monitoring with Prometheus and Grafana

This project sets up monitoring for multiple Nginx instances using Prometheus and Grafana with Docker Compose.

## Components

- Nginx 1.18.0 with Nginx Exporter
- Nginx 1.25.2 with Nginx Exporter
- Prometheus for metrics collection
- Grafana for visualization
- Nginx Exporters to expose Nginx metrics

## Prerequisites

- Docker
- Docker Compose

## Quick Start

1. Start the containers:

   ```bash
   docker compose up -d
   ```

2. Access the services:
   - Nginx 1.18.0: <http://localhost:8080>
   - Nginx 1.25.2: <http://localhost:8081>
   - Prometheus: <http://localhost:9090>
   - Grafana: <http://localhost:3000>
     - Default credentials:
       - Username: admin
       - Password: admin

3. Stop the containers:

   ```bash
   docker compose down
   ```
