import { Component , inject, OnInit, signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DataInterface } from '../dataInterface';
import { map , filter } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule, FormControlName } from '@angular/forms';
@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent implements OnInit{

private http = inject(HttpClient)
private api = 'https://673c0d5a96b8dcd5f3f85990.mockapi.io/stone-oak-library/books'
public library = signal<DataInterface[]>([]) //keep track of changes and update the ui if any thing changes

public showData = signal<boolean>(false);
public showError = signal<boolean>(false)

// showing menu of form to pop up when click
public showModalForm = signal<boolean>(false)

// three dot menu 
public showThreeDotMenu = signal<boolean>(false)

// for form section 
public menuFrom = new FormGroup({
  author: new FormControl('Hafiz'),
  title: new FormControl(''),
  id: new FormControl(''),
  inStock: new FormControl(''),
  genre: new FormControl(''),
  description: new FormControl(''),
  price: new FormControl('')
})

//for modal saction to pop up
public menuFromEdit = new FormGroup({
  author: new FormControl('jef'),
  title: new FormControl(''),
  id: new FormControl(''),
  inStock: new FormControl(''),
  genre: new FormControl(''),
  description: new FormControl(''),
  price: new FormControl('')
})


public openMenu():void{
  this.showThreeDotMenu.set(true)
  }
  
// this function shows that when the Edit button clicked then call this function.
public showModalMenu(): void{
this.showModalForm.set(true)
}
// for the form that add item button 
public addItem(): void{
  this.http.post<DataInterface>(this.api, this.menuFrom.value).subscribe({
    next : Response =>{
      console.log(Response)
    },
    error : err =>{
      
    }, 
    complete: () =>{
window.location.reload();
    }
  })
}

public deleteItem(id: any): void{
  this.http.delete(this.api + `/${id}`).subscribe({
    next: Response=>{

    },
    error: ()=>{

    },
    complete : ()=>{
      window.location.reload();
    }
  })
}

//  update item
public updateItem():void{
  // this.http.patch<DataInterface>(this.api + `/${id}`, this.)
}


    ngOnInit(): void {
      setTimeout(() => {
    this.http.get<DataInterface[]>(this.api).pipe(
      map((books) =>{
        return books.filter(book => book.author)
      })
    ).subscribe({


      next: response => {
      
          this.library.set(response)
        console.log(response)
            },
          error: err =>{
            console.error(err)
            this.showError.set(true)
          },
          complete: () =>{
            this.showData.set(true)
          }
          }) 
            }, 1000);
          }

          }
