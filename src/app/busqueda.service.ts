import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class BusquedaService {

  constructor(private http: HttpClient) { }

  api_key: 'DMBA3yv5gg6vf8ALIw2AHHfo7YSt0Dq6';
  limit: '24';
  url: 'https://api.giphy.com/v1/gifs/search';
  q: string;
  

   getBusqueda(q){

     console.log(q)
     let url = `${this.url}?api_key=${this.api_key}&q=${q}&limit=${this.limit}`;
    return this.http.get(url);
 
    
    
    //return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=%${environment.chaveGiphy}&limit=24`)
   }
}
