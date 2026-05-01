# 📚 Book Tracker

Application web pour gérer sa liste de livres à lire.

## Architecture
- **Backend** : Node.js + Express
- **Frontend** : HTML/CSS/JS
- **Container** : Docker
- **CI/CD** : GitHub Actions
- **Deploy** : Kubernetes + ArgoCD
- **Monitoring** : Prometheus + Grafana

## Lancer en local
cd backend && npm install && node app.js

## Lancer avec Docker
docker build -f docker/Dockerfile -t book-tracker .
docker run -p 3000:3000 book-tracker

## Structure
book-tracker/
├── backend/        API Node.js
├── frontend/       Interface HTML
├── docker/         Dockerfile
├── k8s/            Manifests Kubernetes
└── .github/        Pipelines CI/CD
