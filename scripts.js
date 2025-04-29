// Función para mostrar el formulario de transferencia
function showTransferForm() {
    const transferenciaContainer = document.getElementById("transferencia-container");
    transferenciaContainer.style.display = "flex"; // Mostrar el formulario con fondo borroso
}

// Cerrar el formulario de transferencia
document.getElementById("closeModalBtn").addEventListener("click", function() {
    const transferenciaContainer = document.getElementById("transferencia-container");
    transferenciaContainer.style.display = "none"; // Ocultar el formulario
});

// Función de búsqueda en tiempo real
function searchServices() {
    const input = document.getElementById("searchInput").value.toLowerCase();  // Obtener el valor de búsqueda en minúsculas
    const serviceCards = document.querySelectorAll(".service-card");  // Obtener todos los servicios

    // Recorrer todos los servicios
    serviceCards.forEach(function(card) {
        const serviceName = card.querySelector("h2").textContent.toLowerCase(); // Obtener el nombre del servicio
        if (serviceName.includes(input)) {
            card.style.display = "block";  // Mostrar el servicio si coincide con la búsqueda
        } else {
            card.style.display = "none";  // Ocultar el servicio si no coincide
        }
    });
}

// Botón de pago único para Netflix
paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '3.50' // Este valor es el precio del servicio, puede cambiar dinámicamente
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Pago exitoso por: ' + details.payer.name.given_name);
        });
    },
    onError: function(err) {
        console.error('Error en el pago:', err);
        alert('Hubo un error con el pago. Por favor, inténtalo nuevamente.');
    }
}).render('#paypal-button-container-netflix');  // Renderiza el botón de PayPal para Netflix

// Botón de pago único para Disney
paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '3.50' // Este valor es el precio del servicio, puede cambiar dinámicamente
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Pago exitoso por: ' + details.payer.name.given_name);
        });
    },
    onError: function(err) {
        console.error('Error en el pago:', err);
        alert('Hubo un error con el pago. Por favor, inténtalo nuevamente.');
    }
}).render('#paypal-button-container-disney');  // Renderiza el botón de PayPal para Disney

// Botón de pago único para Disney Plus
paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '5.50' // Este valor es el precio del servicio, puede cambiar dinámicamente
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Pago exitoso por: ' + details.payer.name.given_name);
        });
    },
    onError: function(err) {
        console.error('Error en el pago:', err);
        alert('Hubo un error con el pago. Por favor, inténtalo nuevamente.');
    }
}).render('#paypal-button-container-disneyplus');  // Renderiza el botón de PayPal para Disney Plus

// Otras funciones para manejar la carga y envío de comprobantes

// Botón de pago único para Amazon Prime Video
paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '20' // Este valor es el precio del servicio, puede cambiar dinámicamente
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Pago exitoso por: ' + details.payer.name.given_name);
        });
    },
    onError: function(err) {
        console.error('Error en el pago:', err);
        alert('Hubo un error con el pago. Por favor, inténtalo nuevamente.');
    }
}).render('#paypal-button-container-amazon');

// Botón de pago único para HBO Max
paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '3.50' // Este valor es el precio del servicio, puede cambiar dinámicamente
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Pago exitoso por: ' + details.payer.name.given_name);
        });
    },
    onError: function(err) {
        console.error('Error en el pago:', err);
        alert('Hubo un error con el pago. Por favor, inténtalo nuevamente.');
    }
}).render('#paypal-button-container-hbo');

// Botón de pago único para Apple TV+
paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '10.50' // Este valor es el precio del servicio, puede cambiar dinámicamente
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Pago exitoso por: ' + details.payer.name.given_name);
        });
    },
    onError: function(err) {
        console.error('Error en el pago:', err);
        alert('Hubo un error con el pago. Por favor, inténtalo nuevamente.');
    }
}).render('#paypal-button-container-apple');

// Botón de pago único para YouTube Premium
paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '5' // Este valor es el precio del servicio, puede cambiar dinámicamente
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Pago exitoso por: ' + details.payer.name.given_name);
        });
    },
    onError: function(err) {
        console.error('Error en el pago:', err);
        alert('Hubo un error con el pago. Por favor, inténtalo nuevamente.');
    }
}).render('#paypal-button-container-youtube');

// Botón de pago único para Spotify
paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '8.50' // Este valor es el precio del servicio, puede cambiar dinámicamente
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Pago exitoso por: ' + details.payer.name.given_name);
        });
    },
    onError: function(err) {
        console.error('Error en el pago:', err);
        alert('Hubo un error con el pago. Por favor, inténtalo nuevamente.');
    }
}).render('#paypal-button-container-spotify');

// Botón de pago único para Paramount+
paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '1.50' // Este valor es el precio del servicio, puede cambiar dinámicamente
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Pago exitoso por: ' + details.payer.name.given_name);
        });
    },
    onError: function(err) {
        console.error('Error en el pago:', err);
        alert('Hubo un error con el pago. Por favor, inténtalo nuevamente.');
    }
}).render('#paypal-button-container-paramount');

// Función para manejar la carga y el envío de comprobantes
function submitTransfer() {
    const fileInput = document.getElementById("comprobante-file");
    const file = fileInput.files[0];

    if (!file) {
        alert("Por favor, carga el comprobante de la transferencia.");
        return;
    }

    const formData = new FormData();
    formData.append("image", file);

    // Suponiendo que usas un servicio para subir imágenes como Imgur
    fetch('https://api.imgur.com/3/image', {
        method: 'POST',
        headers: {
            'Authorization': 'Client-ID d22e38c9f9bb92d'
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const imageUrl = data.data.link;
            redirectToWhatsApp(imageUrl);
            
            // Limpiar el campo de entrada del archivo después de enviar la imagen
            fileInput.value = '';  // Esto borra la última imagen seleccionada
        } else {
            alert("Hubo un error al subir la imagen.");
        }
    })
    .catch(error => {
        console.error("Error al subir el archivo:", error);
        alert("Hubo un error al subir el comprobante.");
    });
}

// Redirigir a WhatsApp con el enlace de la imagen
function redirectToWhatsApp(imageUrl) {
    const phoneNumber = '+593978917768'; // Número de WhatsApp
    const message = `📄Aquí está mi comprobante: ${imageUrl}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

document.querySelectorAll('.service-card').forEach(card => {
    const video = card.querySelector('.video');

    card.addEventListener('mouseenter', () => {
        console.log("Reproduciendo video");  // Verifica si el evento se dispara
        video.load(); // Asegura que el video se recargue
        video.play(); // Reproduce el video
    });

    card.addEventListener('mouseleave', () => {
        console.log("Pausando video");  // Verifica si el evento se dispara
        video.pause(); // Pausa el video
        video.currentTime = 0; // Reinicia el video
    });
});

