import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barragiphy',
  templateUrl: './barragiphy.component.html',
  styleUrls: ['./barragiphy.component.css']
})
export class BarragiphyComponent implements OnInit {

  constructor() { }

  term: string;

  ngOnInit(): void {
  }

  search(form) {


    console.log ("teste",form);
    location.href = `/Busqueda/${form.value.term}`;
        
  }

}
