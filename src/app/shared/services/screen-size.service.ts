import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {

  private screenWidth: number;
  private screenHeight: number;

  constructor() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
    this.screenHeight = event.target.innerHeight;
  }

  public getWidth(): number {
    return this.screenWidth;
  }

  public getHeight(): number {
    return this.screenHeight;
  }

  public logSize(): void {
    console.log(`El ancho de la pantalla es ${this.screenWidth} píxeles`);
    console.log(`El alto de la pantalla es ${this.screenHeight} píxeles`);
  }
}
