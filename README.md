cat > README.md <<'EOF'
# Facepage - Starter

## How to run (Backend)
cd backend
npm install
cp .env.example .env
# edit .env to set MONGO_URI and JWT_SECRET
npm start

## How to run (Frontend)
cd frontend
npm install
npm start
# open http://localhost:3000
EOF