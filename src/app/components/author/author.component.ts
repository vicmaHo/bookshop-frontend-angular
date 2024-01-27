import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { BookshopService } from '../../bookshop.service';
@Component({
  selector: 'app-author',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './author.component.html',
  styleUrl: './author.component.scss'
})
export class AuthorComponent {

  // Configuracion de la tabla
  displayedColumns: string[] = ['id', 'name', "options"];
  dataSource: AuthorData[] = []; 

  constructor(private bookShopService: BookshopService){
    this.bookShopService.getAllAuthors().subscribe(
      (authors) => {
        this.dataSource = authors.map(author => <AuthorData> {
          id: author.id,
          full_name: `${author.firstName} ${author.lastName}`
        }

        );
      }
    );
  }


}

// Interface para los datos
export interface AuthorData {
  id: number;
  full_name: string;
}


// const ELEMENT_DATA: AuthorData[] = [
//   {id: 1, full_name: 'Hydrogen'},
//   {id: 2, full_name: 'Helium'},
//   {id: 3, full_name: 'Lithium'},
//   {id: 4, full_name: 'Beryllium'},
//   {id: 5, full_name: 'Boron'},
//   {id: 6, full_name: 'Carbon'},
//   {id: 7, full_name: 'Nitrogen'},
//   {id: 8, full_name: 'Oxygen'},
//   {id: 9, full_name: 'Fluorine'},
//   {id: 10, full_name: 'Neon'},
// ];