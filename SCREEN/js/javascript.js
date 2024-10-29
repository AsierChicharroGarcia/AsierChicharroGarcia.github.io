window.onload = function () {
  let altura = screen.height;
  let anchura = screen.width;
  let alturaSinBarras = screen.availHeight;
  let ANCHURASinBarras = screen.availWidth;
  let color = screen.colorDepth;
  let profundidad = screen.pixelDepth;
  let orientacion = screen.orientation.type;
  let grados = screen.orientation.angle;

  document.getElementById("1").innerHTML = "ANCHO: " + anchura;
  document.getElementById("2").innerHTML = "Altura: " + altura;
  document.getElementById("3").innerHTML =
    "ALTURA SIN BARRAS: " + alturaSinBarras;
  document.getElementById("4").innerHTML =
    "ANCHO SIN BARRAS: " + ANCHURASinBarras;
  document.getElementById("5").innerHTML = "PROFUNDIDAD DE COLOR: " + color;
  document.getElementById("6").innerHTML =
    "PROFUNDIDAD DE PIXEL: " + profundidad;
  document.getElementById("7").innerHTML = "ORIENTACIÓN: " + orientacion;
  document.getElementById("8").innerHTML = "GRADOS: " + grados;

  let elemento = document.documentElement;
  document.getElementById("boton").onclick = function () {
    if (elemento.requestFullscreen) {
      elemento.requestFullscreen();
    } else if (elemento.mozRequestFullScreen) {
      elemento.mozRequestFullScreen();
    } else if (elemento.webkitRequestFullscreen) {
      elemento.webkitRequestFullscreen();
    } else if (elemento.msRequestFullscreen) {
      elemento.msRequestFullscreen();
    }
  };

  document.getElementById("boton2").onclick = function () {
    screen.orientation.lock(orientacion);
    document.getElementById("14").innerHTML = "LA ROTACIÓN ESTÁ BLOQUEADA";
  };

  document.getElementById("boton3").onclick = function () {
    screen.orientation.unlock();
    document.getElementById("14").innerHTML = "LA ROTACIÓN ESTÁ DESBLOQUEADA";
  };
};
