import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author, Category } from './model/bookshop';

@Injectable({
  providedIn: 'root'
})
// servicio para conectarme y realizlar peticiones http a mi api
export class BookshopService {

  private BASE_URL = 'http://localhost:8080';



  constructor(private http: HttpClient) { }

  // metodo que realiza la peticion usanto el HttpClient
  getAllCategories(){ // indico que los datos que me trae son del tipo Category haciendo referencia a la interface
    return this.http.get<Category[]>(`${this.BASE_URL}/api/v1/category`); // llamada al servicio
  }

  getAllAuthors(){
    return this.http.get<Author[]>(`${this.BASE_URL}/api/v1/author`); // llamada al servicio
  }

  // getCategoryByid(id: number){
  //   return this.http.get(`${this.BASE_URL}/api/v1/category/${id}`); // llamada al servicio
  // }

}
