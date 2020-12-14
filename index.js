// Import stylesheets
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "bootstrap";

$(function() {
  $("#output").text(" ");

  $("#run").click(() => {
    try {
      var parser = require("./gramatica");
      var texto, ast;
      texto = $("#codejs").val();
      if (texto !== "") {
        $("#output").text(" ");
        // invocamos a nuestro parser con el contendio del archivo de entradas
        ast = parser.parse(texto.toString());

        if ($("#output").text() === " ")
          $("#output").text("Se ha Compilado correctamente!");
      } else {
        $("#output").text("Entrada vacia!");
      }
    } catch (e) {
      $("#output").text("Error de parseo");
    }
  });
});
