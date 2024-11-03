# Concesionaria Web

Sistema de gestión para concesionaria de vehículos desarrollado con Node.js, Express y EJS.

## 🚀 Características

- Catálogo de vehículos disponibles
- Detalles específicos de cada vehículo
- Cálculo automático de cuotas
- Filtrado de vehículos por estado (vendido/disponible)

## 📋 Requisitos Previos

- Node.js (v14 o superior)
- npm (v6 o superior)

## 🛠️ Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/concesionaria.git
cd concesionaria
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor:
```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3030`

## 🗂️ Estructura del Proyecto

```
concesionaria/
├── src/
│   ├── controllers/     # Controladores de la aplicación
│   ├── data/           # Datos mock de autos y personas
│   ├── routes/         # Rutas de Express
│   ├── services/       # Lógica de negocio
│   ├── views/          # Plantillas EJS
│   └── app.js          # Punto de entrada
├── test/               # Tests unitarios
└── package.json
```

## 🧪 Tests

Para ejecutar los tests:
```bash
npm test
```

## 🛣️ Endpoints

- `GET /` - Página de inicio
- `GET /autos` - Listado de vehículos
- `GET /autos/:patente` - Detalle de un vehículo específico

## 🔧 Tecnologías Utilizadas

- Node.js
- Express
- EJS
- Jest (Testing)

## ✨ Autor

Matias Benedetti
