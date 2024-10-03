$(document).ready(function () {
    const videos = [
        "/ejercicio2Pedro/video1.mp4",
        "/ejercicio2Pedro/video2.mp4", 
        "/ejercicio2Pedro/video3.mp4",
        "/ejercicio2Pedro/video4.mp4"
    ];

    $(document).on("click", "#btn-add-paragraph", function () {
        const randomIndex = Math.floor(Math.random() * videos.length);
        const randomVideo = videos[randomIndex];
        $("#content").append(`<video class="a" controls><source src="${randomVideo}" type="video/mp4">Tu navegador no soporta el video.</video>`);
    });

    $(document).on("click", "#btn-delete-paragraph", function () {
        const lastVideo = $("#content video:last");
        if (lastVideo.length) {
            lastVideo.remove();
        } else {
            alert("No hay videos para eliminar.");
        }
    });
});
