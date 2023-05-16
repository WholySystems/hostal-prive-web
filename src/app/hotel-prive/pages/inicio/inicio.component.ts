import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hotel-prive-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    function cambiarImagen() {
      var imagenes = document.querySelectorAll('.main');
      var imagenActiva = document.querySelector('.main.active') as HTMLDivElement;
      var indiceImagenActiva = Array.prototype.indexOf.call(imagenes, imagenActiva);
      var indiceProximaImagen = indiceImagenActiva + 1;
      if (indiceProximaImagen >= imagenes.length) {
        indiceProximaImagen = 0;
      }
      imagenActiva!.addEventListener('transitionend', function() {
          imagenActiva.classList.remove('active');
          imagenes[indiceProximaImagen].classList.add('active');
        });
        imagenActiva.classList.remove('active');
        imagenes[indiceProximaImagen].classList.add('active');
    }
    setInterval(cambiarImagen, 5000);
  }

}
