# 🍽️ Sistema de Reservas de Restaurante

**Proyecto Grupal #11 - Programación Web**  
**Lead University - Segundo Cuatrimestre 2025**

## 📋 Descripción

Sistema web para la gestión de reservas de un restaurante que permite a los clientes realizar reservas en línea y al personal administrativo gestionar las mesas, horarios y disponibilidad del establecimiento.

## ✨ Características Principales

- **Reservas en línea**: Los clientes pueden realizar reservas de forma fácil e intuitiva
- **Gestión de mesas**: Administración del layout del restaurante y disponibilidad
- **Control de horarios**: Configuración de horarios de atención y disponibilidad
- **Panel administrativo**: Interface para el personal del restaurante
- **Notificaciones**: Sistema de confirmación de reservas
- **Historial de reservas**: Seguimiento de reservas pasadas y futuras

## 🛠️ Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: PHP
- **Base de Datos**: MySQL
- **Framework CSS**: Bootstrap (opcional)
- **Servidor**: Apache/Nginx

## 📦 Instalación

### Prerrequisitos

- Servidor web (XAMPP, WAMP, LAMP)
- PHP 7.4 o superior
- MySQL 5.7 o superior
- Navegador web moderno

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/jmiguelugalde/reservas-restaurante.git
   cd reservas-restaurante
   ```

2. **Configurar la base de datos**
   - Crear una base de datos MySQL llamada `reservas_restaurante`
   - Importar el archivo `database/schema.sql`
   - Configurar las credenciales en `config/database.php`

3. **Configurar el servidor**
   - Copiar los archivos al directorio del servidor web
   - Asegurar permisos de escritura en carpetas necesarias

4. **Acceder al sistema**
   - Abrir `http://localhost/reservas-restaurante` en el navegador

## 🚀 Uso del Sistema

### Para Clientes

1. **Realizar una reserva**:
   - Seleccionar fecha y hora deseada
   - Especificar número de personas
   - Proporcionar datos de contacto
   - Confirmar la reserva

2. **Consultar reserva**:
   - Ingresar código de reserva
   - Ver detalles y estado de la reserva

### Para Administradores

1. **Gestión de reservas**:
   - Ver todas las reservas del día/semana/mes
   - Confirmar o cancelar reservas
   - Modificar detalles de reservas existentes

2. **Configuración del restaurante**:
   - Gestionar mesas y capacidad
   - Configurar horarios de atención
   - Establecer días de cierre

## 📁 Estructura del Proyecto

```
reservas-restaurante/
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
├── config/
│   └── database.php
├── database/
│   └── schema.sql
├── includes/
│   ├── header.php
│   ├── footer.php
│   └── functions.php
├── admin/
│   ├── index.php
│   ├── reservas.php
│   └── configuracion.php
├── api/
│   ├── crear_reserva.php
│   └── consultar_reserva.php
├── index.php
├── reservar.php
├── consultar.php
└── README.md
```

## 🗃️ Base de Datos

### Principales tablas:

- **usuarios**: Información de administradores
- **clientes**: Datos de los clientes
- **mesas**: Configuración de mesas del restaurante
- **reservas**: Registro de todas las reservas
- **horarios**: Configuración de horarios de atención

## 🎨 Capturas de Pantalla

*[Aquí se pueden agregar capturas de pantalla del sistema en funcionamiento]*

## 🤝 Contribuidores

- **jmiguelugalde** - Desarrollador principal
- *[Agregar otros miembros del equipo]*

## 📝 Funcionalidades Futuras

- [ ] Integración con sistemas de pago
- [ ] Notificaciones por email/SMS
- [ ] App móvil
- [ ] Sistema de reseñas y calificaciones
- [ ] Integración con redes sociales
- [ ] Dashboard con analytics

## 🐛 Reporte de Bugs

Si encuentras algún error o tienes sugerencias, por favor:

1. Revisa si el issue ya existe
2. Crea un nuevo issue con:
   - Descripción detallada del problema
   - Pasos para reproducir el error
   - Capturas de pantalla si es necesario

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

**Lead University - Programación Web**  
Segundo Cuatrimestre 2025

---

⭐ **¡No olvides dar una estrella al proyecto si te fue útil!** ⭐
