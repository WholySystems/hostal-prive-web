
import { Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'hotel-prive-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit{
  isVisible = false;

  @HostListener('window:scroll', [])
  handleScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const element1 = document.getElementById("title") as HTMLDivElement;
    if(scrollTop > 500){
      this.mover(element1)
      console.log(scrollTop)
      element1.style.opacity = "1";
      element1.style.transitionDuration = "1.5s";
    }
  }

  mover( element : HTMLDivElement){
    element.style.transform = 'translateY(0rem)'
    element.style.transition = "all";
  }

  ngOnInit(): void {
  }
}