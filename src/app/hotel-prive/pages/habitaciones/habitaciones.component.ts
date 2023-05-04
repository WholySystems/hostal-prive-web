import { Component } from '@angular/core';
import { Habitacion } from '../../interfaces/hotel.interface';

@Component({
  selector: 'hotel-prive-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent {

  public habitaciones: Habitacion[]= [
    {
      id: 101,
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      foto: './assets/hotel-rooms/101.jpg'
    },
    {
      id: 102,
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      foto: './assets/hotel-rooms/102.jpg'
    },
    {
      id: 103,
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      foto: './assets/hotel-rooms/103.jpg'
    },
    {
      id: 104,
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      foto: './assets/hotel-rooms/104.jpg'
    },
    {
      id: 105,
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      foto: './assets/hotel-rooms/105.jpg'
    },
    {
      id: 201,
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      foto: './assets/hotel-rooms/201.jpg'
    },
    {
      id: 202,
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      foto: './assets/hotel-rooms/202.jpg'
    },
    {
      id: 203,
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      foto: './assets/hotel-rooms/203.jpg'
    },
    {
      id: 204,
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      foto: './assets/hotel-rooms/204.jpg'
    },
    {
      id: 205,
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      foto: './assets/hotel-rooms/205.jpg'
    }
  ]
}
