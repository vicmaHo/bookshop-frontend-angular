import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { BookshopService } from '../../bookshop.service';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  displayedColumns: string[] = ['id', 'name', "options"];
  dataSource: CategoryData[] = []; 

  // para crear el componente necesito el bookservice
  constructor(private bookShopService: BookshopService){
    this.bookShopService.getAllCategories()
      .subscribe(
        (categories) => {
          //convertir las categorias en una lista de categoryData
          // como tienen el mismo nombre de variable puedo indicar la conversion de forma simplificada
          // this.dataSource = <CategoryData[]>(categories); 
          // realizo el mapeo de category a category data
          this.dataSource = categories.map(cat => <CategoryData>{
            id: cat.id,
            name: cat.name
          })
        }
    );
  }

}



export interface CategoryData {
  id: number;
  name: string
}

// const ELEMENT_DATA: CategoryData[] = [
//   {id: 1, name: 'Hydrogen'},
//   {id: 2, name: 'Helium'},
//   {id: 3, name: 'Lithium'},
//   {id: 4, name: 'Beryllium'},
//   {id: 5, name: 'Boron'},
//   {id: 6, name: 'Carbon'},
//   {id: 7, name: 'Nitrogen'},
//   {id: 8, name: 'Oxygen'},
//   {id: 9, name: 'Fluorine'},
//   {id: 10, name: 'Neon'},
// ];