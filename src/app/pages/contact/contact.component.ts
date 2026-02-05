import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
   standalone: true,
  imports: [FormsModule,
      HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


  formData = {
    fullName: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
  alert('Message sent successfully!');
}


}
