import { Component, OnInit } from '@angular/core';
import { Habitacion } from '../../interfaces/hotel.interface';

@Component({
  selector: 'hotel-prive-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css'],
})
export class HabitacionesComponent implements OnInit  {
  ngOnInit(): void {
    window.scrollTo(0,0);
  }
  
  // public habitaciones: Habitacion[] = [
  //   {
  //     id: 101,
  //     description:
  //       'Habitación con vista calle 3 camas individuales, colchón ortopédico',
  //     fotos: [
  //       '../../../../assets/images/hotel-rooms/h101-1.jpg',
  //       '../../../../assets/images/hotel-rooms/h101-2.jpg',
  //       '../../../../assets/images/hotel-rooms/h101-3.jpg',
  //     ],
  //   },
  //   {
  //     id: 102,
  //     description:
  //       'Habitación con vista calle 3 camas individuales, colchón ortopédico',
  //     fotos: [
  //       '../../../../assets/images/hotel-rooms/h102-1.jpg',
  //       '../../../../assets/images/hotel-rooms/h102-2.jpg',
  //     ],
  //   },
  //   {
  //     id: 103,
  //     description:
  //       'Habitación con vista calle 3 camas individuales, colchón ortopédico',
  //     fotos: [
  //       '../../../../assets/images/hotel-rooms/h103-1.jpg',
  //       '../../../../assets/images/hotel-rooms/h103-2.jpg',
  //     ],
  //   },
  //   {
  //     id: 104,
  //     description:
  //       'Habitación con vista calle 3 camas individuales, colchón ortopédico',
  //     fotos: [
  //       '../../../../assets/images/hotel-rooms/h104-1.jpg',
  //       '../../../../assets/images/hotel-rooms/h104-2.jpg',
  //     ],
  //   },
  //   {
  //     id: 105,
  //     description:
  //       'Habitación con vista calle 3 camas individuales, colchón ortopédico',
  //     fotos: [
  //       '../../../../assets/images/hotel-rooms/h105-1.jpg',
  //       '../../../../assets/images/hotel-rooms/h105-2.jpg',
  //     ],
  //   },
  //   {
  //     id: 106,
  //     description:
  //       'Habitación con vista calle 3 camas individuales, colchón ortopédico',
  //     fotos: [
  //       '../../../../assets/images/hotel-rooms/h106-1.jpg',
  //       '../../../../assets/images/hotel-rooms/h106-2.jpg',
  //       '../../../../assets/images/hotel-rooms/h106-2.jpg',
  //     ],
  //   },
  //   {
  //     id: 107,
  //     description:
  //       'Habitación con vista calle 3 camas individuales, colchón ortopédico',
  //     fotos: [
  //       '../../../../assets/images/hotel-rooms/h107-1.jpg',
  //       '../../../../assets/images/hotel-rooms/h107-2.jpg',
  //     ],
  //   },
  //   {
  //     id: 108,
  //     description:
  //       'Habitación con vista calle 3 camas individuales, colchón ortopédico',
  //     fotos: [
  //       '../../../../assets/images/hotel-rooms/h108-1.jpg',
  //       '../../../../assets/images/hotel-rooms/h108-2.jpg',
  //       '../../../../assets/images/hotel-rooms/h108-2.jpg',
  //       '../../../../assets/images/hotel-rooms/h108-2.jpg',
  //     ],
  //   },
  //   {
  //     id: 109,
  //     description:
  //       'Habitación con vista calle 3 camas individuales, colchón ortopédico',
  //     fotos: [
  //       '../../../../assets/images/hotel-rooms/h109-1.jpg',
  //       '../../../../assets/images/hotel-rooms/h109-2.jpg',
  //       '../../../../assets/images/hotel-rooms/h109-2.jpg',
  //     ],
  //   },
  // ];
}
