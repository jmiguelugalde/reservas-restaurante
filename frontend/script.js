const form = document.getElementById("form-reserva");
const listaReservas = document.getElementById("lista-reservas");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    // Tomamos la hora del input que es "HH:MM"
    let horaInput = document.getElementById("hora").value; // ejemplo: "14:30"

    // Agregamos ":00" para completar formato de MySQL TIME "HH:MM:SS"
    if (horaInput && horaInput.length === 5) {
        horaInput += ":00";
    }

    const reserva = {
        nombre: document.getElementById("nombre").value,
        telefono: document.getElementById("telefono").value,
        fecha: document.getElementById("fecha").value,
        hora: horaInput,  // enviamos con segundos
        personas: parseInt(document.getElementById("personas").value)
    };

    // Leemos el id de la reserva a editar desde el input oculto
    const idReserva = document.getElementById("reserva-id").value;

    let url = "http://localhost:8000/reservas/";
    let method = "POST";

    if (idReserva) {
        url += idReserva;  // agregar id al endpoint para PUT
        method = "PUT";
    }

    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reserva)  // no enviar el id en el body
        });

        if (!response.ok) {
            throw new Error("Error en la respuesta del servidor");
        }

        const result = await response.json();
        mostrarMensaje(result.mensaje, true);

        form.reset();

        // Limpia el id al terminar
        document.getElementById("reserva-id").value = "";

        cargarReservas();
    } catch (error) {
        mostrarMensaje("Error al guardar la reserva. Intente nuevamente.", false);
        console.error("Error al guardar:", error);
    }
});

async function cargarReservas() {
    try {
        const response = await fetch("http://localhost:8000/reservas/");
        const reservas = await response.json();

        listaReservas.innerHTML = `
            <h2>Reservas</h2>
            <div class="reserva-header">
                <span>Nombre</span>
                <span>Fecha</span>
                <span>Hora</span>
                <span>Personas</span>
                <span>Acciones</span>
            </div>
        `;

        reservas.forEach(reserva => {
            let hora12 = "Hora inválida";

            if (typeof reserva.hora === "string" && /^\d{2}:\d{2}/.test(reserva.hora)) {
                const [hh, mm] = reserva.hora.split(":");
                const d = new Date();
                d.setHours(parseInt(hh), parseInt(mm));
                hora12 = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
            }

            const fila = document.createElement("div");
            fila.className = "reserva-fila";
            fila.innerHTML = `
                <span>${reserva.nombre}</span>
                <span>${reserva.fecha}</span>
                <span>${hora12}</span>
                <span>${reserva.personas}</span>
                <span class="reserva-botones">
                    <button class="btn-editar"><i class="fas fa-pen"></i></button>
                    <button class="btn-eliminar"><i class="fas fa-trash"></i></button>
                </span>
            `;

            fila.querySelector(".btn-editar").onclick = () => {
                // Al hacer clic en editar ponemos los datos en el formulario
                document.getElementById("nombre").value = reserva.nombre;
                document.getElementById("telefono").value = reserva.telefono;
                document.getElementById("fecha").value = reserva.fecha;

                // Si reserva.hora viene como "HH:MM:SS" o "HH:MM", solo tomamos "HH:MM"
                const horaFormateada = (typeof reserva.hora === "string") ? reserva.hora.slice(0, 5) : "";
                document.getElementById("hora").value = horaFormateada;

                document.getElementById("personas").value = reserva.personas;
                document.getElementById("reserva-id").value = reserva.id;
            };

            fila.querySelector(".btn-eliminar").onclick = async () => {
                if (confirm("¿Estás seguro de que deseas eliminar esta reserva?")) {
                    await fetch(`http://localhost:8000/reservas/${reserva.id}`, { method: "DELETE" });
                    mostrarMensaje("Reserva eliminada correctamente.", true);
                    cargarReservas();
                }
            };

            listaReservas.appendChild(fila);
        });
    } catch (error) {
        mostrarMensaje("Error al cargar las reservas.", false);
        console.error("Error al cargar:", error);
    }
}

function mostrarMensaje(texto, esExito = true) {
    const mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.textContent = texto;
    mensajeDiv.className = "mensaje-estado " + (esExito ? "exito" : "error");
    mensajeDiv.style.display = "block";

    setTimeout(() => {
        mensajeDiv.style.display = "none";
    }, 3000);
}

cargarRese
