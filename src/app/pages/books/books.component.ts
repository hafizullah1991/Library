import { Component , inject, OnInit, signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { single } from 'rxjs';

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
public library = signal<any>([]) //keep track of changes and update the ui if any thing changes

public showData = signal<boolean>(false);
public showError = signal<boolean>(false)

ngOnInit(): void {
this.http.get<any>(this.api).subscribe({
  next: response => {
    setTimeout(() => {
      this.library.set(response)
    console.log(response)
    }, 2000);
    
  },
error: err =>{
  console.error(err)
  this.showError.set(true)
},
complete: () =>{
  this.showData.set(true)
}
})  
}

}
