import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public click: boolean = false;
  public text: string = 'Open the door for a spacious living';

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 768) {
      this.click = false;
    }

    // console.log(event.target.innerWidth);
    // console.log(event.target.innerHeight);

  }

  ngAfterViewInit() {
    this.typewriterEffect();
  }

  typewriterEffect() {
    const element = document.getElementById("typewriter");
    if (element) {
      const text = element.innerHTML;
      element.innerHTML = "";
      let i = 0;
      let speed = 60;
      const type = () => {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
        } else {
          i = 0;
          setTimeout(() => {
            element.innerHTML = "";
            type();
          }, 1000);
        }
      }
      type();
    }
  }

  public toggleMenu() {
    this.click = !this.click;
  }
}
