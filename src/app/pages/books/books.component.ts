import { Component , inject, OnInit, signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DataInterface } from '../dataInterface';
import { map , filter } from 'rxjs';
@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent implements OnInit{

private http = inject(HttpClient)
private api = 'https://673c0d5a96b8dcd5f3f85990.mockapi.io/stone-oak-library/books'
public library = signal<DataInterface[]>([]) //keep track of changes and update the ui if any thing changes

public showData = signal<boolean>(false);
public showError = signal<boolean>(false)

ngOnInit(): void {
  setTimeout(() => {
this.http.get<DataInterface[]>(this.api).pipe(
  map((books) =>{
    return books.filter(book => book.author)
  })
).subscribe({


  next: response => {
   
      this.library.set(response)
    // console.log(response)
        },
      error: err =>{
        console.error(err)
        this.showError.set(true)
      },
      complete: () =>{
        this.showData.set(true)
      }
      }) 
        }, 2000);
      }

      // public addItem(): void{
      //   this.http.post<DataInterface>(this.api.Icecream)
      // }
      }
