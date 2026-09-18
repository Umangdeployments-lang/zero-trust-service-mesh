# Zero Trust Service Mesh

This repository contains a FastAPI backend and a React + Three.js frontend. It includes CI configuration, Docker support, and basic status endpoint.

## Quick start

```sh
# Backend
cd backend
uvicorn main:app --reload

# Frontend
cd ../frontend
npm install
npm start
```

## CI
GitHub Actions runs tests for the backend and builds the frontend on each push.

## Docker

```sh
docker compose up -d
```

Access the backend at http://localhost:8000/status and the frontend at http://localhost:3000.