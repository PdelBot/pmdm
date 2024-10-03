$(document).ready(function () {
    const images = [
        "/ejercicio2Pedro/benajmin.webp",
        "/ejercicio2Pedro/mono.jpeg", 
        "/ejercicio2Pedro/whatsappjunior.jpg",
        "/ejercicio2Pedro/monkiflip.jpg"
    ];

    $(document).on("click", "#btn-add-paragraph", function () {
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = images[randomIndex];
        $("#content").append(`<img class="a" src="${randomImage}" alt="">`);
    });

    $(document).on("click", "#btn-delete-paragraph", function () {
        const lastImage = $("#content img:last");
        if (lastImage.length) {
            lastImage.remove();
        } else {
            alert("No hay imágenes para eliminar.");
        }
    });
});