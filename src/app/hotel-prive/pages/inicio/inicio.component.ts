
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
    const element2 = document.getElementById("numer1") as HTMLDivElement;
    const element3 = document.getElementById("numer2") as HTMLDivElement;
    const element4 = document.getElementById("numer3") as HTMLDivElement;
    console.log(scrollTop)
    if(window.innerWidth < 880){
      if(scrollTop > 600){
        this.mover(element1);
      } 
      if (scrollTop > 1000){
        this.mover(element2);
      }
      if (scrollTop > 1500){
        this.mover(element3);
      }
      if (scrollTop > 2000){
        this.mover(element4);
      }
    }
    else{
      if(scrollTop > 500){
        this.mover(element1);
      } 
      if (scrollTop > 900){
        this.mover(element2);
      }
      if (scrollTop > 1200){
        this.mover(element3);
      }
      if (scrollTop > 1300){
        this.mover(element4);
      }
    }
  }

  mover( element : HTMLDivElement){
    element.style.transform = 'translateY(0rem)';
    element.style.transition = "all";
    element.style.opacity = "1";
    element.style.transitionDuration = "1.5s";
    
  }

  ngOnInit(): void {
  }
}