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

## For windows server (without docker)

### Setup Nginx

Download nginx <https://nginx.org/en/download.html>, then install and run nginx

```sh
cd c:\
unzip nginx-1.27.3.zip
cd nginx-1.27.3
start nginx
```

Reference <https://nginx.org/en/docs/windows.html>

### Setup Nginx status path

```sh
location /stub_status {
   stub_status on;
   access_log off;
}
```

Then restart nginx

### Install Nginx Exporter

Download Nginx Exporter <https://github.com/nginxinc/nginx-prometheus-exporter/releases>

Then run unzip and run command

```sh
.\nginx-prometheus-exporter.exe --nginx.scrape-uri=http://localhost/stub_status

```

Check port <http://localhost:9113/metrics>

### Install prometheus

Create prometheus.yml

```sh
global:
  scrape_interval: 15s
  evaluation_interval: 15s
scrape_configs:
  - job_name: 'nginx_1_18_0'
    static_configs:
      - targets: ['localhost:9113']
    metrics_path: '/metrics'
```

Download prometheus <https://github.com/prometheus/prometheus/releases>

Then run unzip and run command

```sh
.\prometheus.exe --config.file=prometheus.yml
```

Check port <http://localhost:9090>
