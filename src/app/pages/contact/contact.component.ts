import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, FormControlName ,ReactiveFormsModule, FormsModule} from '@angular/forms';
@Component({
  selector: 'app-contact',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{
public contactFrom = new FormGroup({
  //  means defining a public property named contactFrom 
  //in your class, and it is being assigned a new instance of FormGroup. 
  //This FormGroup serves as a container to 
  //manage the state and validation of the form controls within
  name: new FormControl(''), 
  email: new FormControl(''),
  phone:new FormControl(''),
  message: new FormControl('')
  // These create individual form controls for the name, email, phone, and message fields.
})
ngOnInit(): void {
  
}
public submitForm(): void{
  console.log(this.contactFrom.value)
}
public contactInfo = signal<any>([
  {
    type: 'Address',
    icon: 'Address.png',
    value: '2014 Olivera, APT: 22, Walnut Creek, 93420'
  },
  {
    type: 'Email',
      icon: 'email.png',
      value: 'Kawaki@kawaki.com',
  },
  {
    type: 'Phone',
      icon: 'phone.jpg',
      value: '925494949',
  },
  {
    type: 'Website',
    icon: 'website.png',
    value: 'www.kawaki.com',
  }
])
}
