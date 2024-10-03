$(document).ready(function () {
    $(document).on("click", "#btn-add-paragraph", function () {
      $("#content").append('    <img class="a" src="/ejercicio2Pedro/benajmin.webp" alt="">');

    });
  });

  $(document).on("click", "#btn-delete-paragraph", function () {
    $("#content img:last").remove();

  });
