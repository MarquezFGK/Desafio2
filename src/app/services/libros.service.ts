import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  searchURL = 'https://api.github.com/search/repositories?q=language:';



  constructor( private http : Http) { }
  
  getLibros(lenguaje: string): Promise<any> {
    let searchURL = this.searchURL + lenguaje ;
    let promise = new Promise((resolve, reject)=>{ 

      this.http.get(searchURL)
      .toPromise()
      .then(res => {
        resolve(res.json().items);
      },
      msg => {
        reject(msg);
      }
      );
    });

    return promise;
  }
}
