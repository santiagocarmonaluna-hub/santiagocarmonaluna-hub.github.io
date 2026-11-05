let usuarioActual = "";

// =========================
// INICIAR SESIÓN
// =========================

function iniciarSesion(event) {

    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const correo = document.getElementById("correo").value.trim();

    const mensaje = document.getElementById("mensajeLogin");

    if (usuario === "" || correo === "") {

        mensaje.textContent =
            "Completa todos los campos.";

        mensaje.style.color = "red";

        return;
    }

    usuarioActual = usuario;

    document.getElementById("loginScreen")
        .classList.add("oculto");

    document.getElementById("app")
        .classList.remove("oculto");

    mensaje.textContent = "";
}


// =========================
// CERRAR SESIÓN
// =========================

function cerrarSesion() {

    document.getElementById("app")
        .classList.add("oculto");

    document.getElementById("loginScreen")
        .classList.remove("oculto");

    document.getElementById("usuario").value = "";
    document.getElementById("correo").value = "";

    usuarioActual = "";
}


// =========================
// AGREGAR REPORTE
// =========================

function agregarReporte() {

    const ubicacion =
        document.getElementById("ubicacion").value.trim();

    const riesgo =
        document.getElementById("riesgo").value;

    const descripcion =
        document.getElementById("descripcion").value.trim();

    const mensaje =
        document.getElementById("mensaje");

    const lista =
        document.getElementById("listaReportes");


    // Validar campos

    if (
        ubicacion === "" ||
        riesgo === "" ||
        descripcion === ""
    ) {

        mensaje.textContent =
            "Por favor, completa todos los campos.";

        mensaje.style.color = "red";

        return;
    }


    // Quitar mensaje inicial

    const mensajeInicial =
        lista.querySelector(".sin-reportes");

    if (mensajeInicial) {
        mensajeInicial.remove();
    }


    // Crear reporte

    const reporte =
        document.createElement("div");

    reporte.className = "reporte";


    const titulo =
        document.createElement("h3");

    titulo.textContent =
        "📍 " + ubicacion;


    const usuario =
        document.createElement("p");

    usuario.textContent =
        "👤 Reportado por: " + usuarioActual;


    const nivel =
        document.createElement("p");

    nivel.textContent =
        "⚠️ Nivel de riesgo: " + riesgo;


    const texto =
        document.createElement("p");

    texto.textContent =
        "📝 " + descripcion;


    reporte.appendChild(titulo);

    reporte.appendChild(usuario);

    reporte.appendChild(nivel);

    reporte.appendChild(texto);


    lista.prepend(reporte);


    // Actualizar estadísticas

    actualizarEstadisticas();


    // Mensaje

    mensaje.textContent =
        "¡Reporte enviado correctamente!";

    mensaje.style.color = "green";


    // Limpiar formulario

    document.getElementById("ubicacion").value = "";

    document.getElementById("riesgo").value = "";

    document.getElementById("descripcion").value = "";
}


// =========================
// ESTADÍSTICAS
// =========================

function actualizarEstadisticas() {

    const reportes =
        document.querySelectorAll(".reporte");

    const total =
        reportes.length;

    let altos = 0;


    reportes.forEach(function(reporte) {

        if (
            reporte.textContent.includes(
                "Nivel de riesgo: Alto"
            )
        ) {
            altos++;
        }

    });


    document.getElementById("totalReportes")
        .textContent = total;

    document.getElementById("reportesAltos")
        .textContent = altos;
}
