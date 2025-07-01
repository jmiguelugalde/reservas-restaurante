# 🍽️ Sistema de Reservas de Restaurante

**Proyecto Grupal #11 - Programación Web**  
**Lead University - Segundo Cuatrimestre 2025**

## 📋 Descripción

Sistema web completo para la gestión de reservas de restaurante desarrollado con FastAPI (Python) como backend y HTML/CSS/JavaScript vanilla como frontend. Permite a los clientes realizar, editar y eliminar reservas de manera intuitiva, con una interfaz moderna y responsiva.

## ✨ Características Principales

- **API REST completa** con FastAPI
- **CRUD completo** de reservas (Crear, Leer, Actualizar, Eliminar)
- **Interfaz moderna** con CSS Grid y animaciones
- **Validación de datos** con Pydantic
- **Base de datos MySQL** para persistencia
- **Despliegue en la nube** con Render
- **CORS habilitado** para desarrollo local
- **Servicio de archivos estáticos** integrado

## 🛠️ Tecnologías Utilizadas

### Backend
- **FastAPI** - Framework web moderno y rápido
- **Python 3.x** - Lenguaje de programación
- **Pydantic** - Validación de datos
- **MySQL Connector** - Conexión a base de datos
- **Uvicorn** - Servidor ASGI
- **python-dotenv** - Gestión de variables de entorno

### Frontend
- **HTML5** - Estructura
- **CSS3** - Estilos con Grid y Flexbox
- **JavaScript (Vanilla)** - Interactividad
- **Font Awesome** - Iconos

### Base de Datos
- **MySQL** - Sistema de gestión de base de datos

### Despliegue
- **Render** - Plataforma de despliegue en la nube

## 📁 Estructura del Proyecto

```
reservas-restaurante/
├── backend/
│   ├── main_fastapi_app.py    # Aplicación principal FastAPI
│   ├── main.py                # Versión básica de la API
│   ├── models.py              # Modelos Pydantic
│   ├── crud.py                # Operaciones CRUD
│   ├── database.py            # Conexión a base de datos
│   ├── requirements.txt       # Dependencias Python
│   └── .env                   # Variables de entorno
├── frontend/
│   ├── index.html            # Página principal
│   ├── script.js             # Lógica JavaScript
│   └── styles.css            # Estilos CSS
├── base-de-datos/
│   └── restaurante.sql       # Script de creación de BD
└── render.yaml               # Configuración de despliegue
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- Python 3.8 o superior
- MySQL 5.7 o superior
- Git

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/jmiguelugalde/reservas-restaurante.git
   cd reservas-restaurante
   ```

2. **Configurar la base de datos**
   ```sql
   -- Ejecutar en MySQL
   CREATE DATABASE restaurante;
   USE restaurante;
   
   CREATE TABLE reservas (
       id INT AUTO_INCREMENT PRIMARY KEY,
       nombre VARCHAR(100),
       telefono VARCHAR(20),
       fecha DATE,
       hora TIME,
       personas INT
   );
   ```

3. **Configurar variables de entorno**
   ```bash
   # Crear archivo backend/.env
   user=tu_usuario_mysql
   password=tu_password_mysql
   database=restaurante
   ```

4. **Instalar dependencias**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

5. **Ejecutar la aplicación**
   ```bash
   # Desde la carpeta backend
   python main_fastapi_app.py
   ```

6. **Acceder al sistema**
   - Frontend: `http://localhost:8000`
   - API Documentation: `http://localhost:8000/docs`

## 🔧 API Endpoints

### Reservas

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `POST` | `/reservas/` | Crear nueva reserva |
| `GET` | `/reservas/` | Obtener todas las reservas |
| `PUT` | `/reservas/{id}` | Actualizar reserva por ID |
| `DELETE` | `/reservas/{id}` | Eliminar reserva por ID |

### Ejemplo de uso

```javascript
// Crear reserva
const reserva = {
    nombre: "Juan Pérez",
    telefono: "8888-8888",
    fecha: "2025-07-15",
    hora: "19:30:00",
    personas: 4
};

fetch("http://localhost:8000/reservas/", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(reserva)
});
```

## 🎨 Características del Frontend

- **Diseño responsivo** con CSS Grid
- **Animaciones suaves** y efectos hover
- **Validación de formularios** en tiempo real
- **Interfaz intuitiva** con iconos de Font Awesome
- **Mensajes de estado** con animaciones
- **Edición inline** de reservas
- **Confirmación de eliminación**

## 🗃️ Modelo de Datos

```python
class Reserva(BaseModel):
    nombre: str        # Nombre completo del cliente
    telefono: str      # Número de teléfono
    fecha: str         # Fecha de la reserva (YYYY-MM-DD)
    hora: str          # Hora de la reserva (HH:MM:SS)
    personas: int      # Cantidad de personas
```

## 🚀 Despliegue

El proyecto está configurado para desplegarse automáticamente en **Render** usando el archivo `render.yaml`:

```yaml
services:
  - type: web
    name: reservas-restaurant
    runtime: python
    buildCommand: pip install -r requirements.txt
    startCommand: uvicorn backend.main_fastapi_app:app --host 0.0.0.0 --port 10000
    plan: free
```

### Variables de entorno en producción
- `user`: Usuario de MySQL
- `password`: Contraseña de MySQL  
- `database`: Nombre de la base de datos

## 🧪 Funcionalidades Implementadas

### ✅ Completadas
- [x] Crear reservas
- [x] Listar reservas
- [x] Editar reservas
- [x] Eliminar reservas
- [x] Validación de datos
- [x] Interfaz responsive
- [x] Conexión a base de datos
- [x] API REST completa
- [x] Manejo de errores
- [x] Configuración de CORS

### 🔮 Mejoras Futuras
- [ ] Autenticación de usuarios
- [ ] Sistema de roles (admin/cliente)
- [ ] Notificaciones por email
- [ ] Calendario visual
- [ ] Gestión de mesas
- [ ] Historial de reservas
- [ ] Dashboard de analytics
- [ ] API de pagos

## 🐛 Solución de Problemas

### Error de conexión a la base de datos
```bash
# Verificar que MySQL esté ejecutándose
sudo systemctl status mysql

# Verificar credenciales en .env
cat backend/.env
```

### Error de CORS
```python
# Ya está configurado en main_fastapi_app.py
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## 👥 Equipo de Desarrollo

- **@jmiguelugalde** - Desarrollador principal
- *Lead University - Programación Web*

## 📄 Licencia

Este proyecto es un trabajo académico desarrollado para Lead University.

## 📞 Contacto

**Lead University**  
Programación Web - Segundo Cuatrimestre 2025

---

⭐ **Sistema desarrollado con FastAPI y MySQL** ⭐
