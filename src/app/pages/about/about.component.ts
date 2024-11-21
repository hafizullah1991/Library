import { Component, signal } from '@angular/core';
import { user } from '../../components/navbar/userInterface';
@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
public userInfo = signal<user[]>([
  {
    name: "Hafiz",
    age: 22,
    email: 'hafiz@gmail.com',
    bio: "software developer at MS Taxas"
  },{
    name: "Rocky",
    age: 33,
    email: "Rocky@gmail.com",
    bio: "The main boss for company , watch out"
  },{
    name: "Maria",
    age: 20, 
    email: "Maria@gmail.com",
    bio: "The assistant for main boss"
  },{
    name: "Brain",
    age: 44, 
    email: "branna@gmail.com",
    bio: "The assistant for north office in UK"
  }
])
}