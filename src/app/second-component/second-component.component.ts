import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {
  title="Hola pa"
  users = ["ryan","joe","boludote"]

  constructor() { }

  ngOnInit(): void {
  }

}
