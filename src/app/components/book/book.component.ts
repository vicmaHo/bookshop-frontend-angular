import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { BookshopService } from '../../bookshop.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  displayedColumns: string[] = ['id', 'title', "isbn", "category", "options"];
  dataSource: BookData[] = []; 

  constructor(private bookShopService: BookshopService){
    this.bookShopService.getAllBooks().subscribe(
      (books) => {
        this.dataSource = books.map(book => <BookData> {
          id: book.id,
          title: book.title,
          isbn: book.isbn,
          category: book.categoryId
        })
      }
    );
  }

}


export interface BookData{
  id: number;
  title: string;
  isbn: string;
  category: number;
}
