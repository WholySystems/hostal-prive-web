import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hotel-prive-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0,0);
  }
}
