import { Component, OnInit } from '@angular/core';
import { BusquedaService } from '../busqueda.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imagems',
  templateUrl: './imagems.component.html',
  styleUrls: ['./imagems.component.css']
})
export class ImagemsComponent implements OnInit {

  imagems: any= [];
  q: string;


  constructor(private route: ActivatedRoute, private busquedaService: BusquedaService) { }

  ngOnInit(): void {


  this.route.params.subscribe(params => {
  this.q = params['q'];
  console.log(params);

  this.busquedaService.getBusqueda(this.q).subscribe(imagems => {
    this.imagems = imagems;
  });  

});
 

  

  }

}
