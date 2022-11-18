let menuVisible = false;

function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

window.onscroll = function () {
  efectoHabilidades();
};

function descargarCv() {
  console.log("descarando");
  var anchor = document.createElement("a");
  anchor.href = "./Curriculom/Curriculom.pdf";
  anchor.target = "_blank";
  anchor.download = "Curriculom_Alexander_Say.pdf";
  anchor.click();
}
