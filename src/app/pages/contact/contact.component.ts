import { HttpClient, HttpClientModule } from '@angular/common/http';
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

  // 🔴 PASTE YOUR GOOGLE SCRIPT URL HERE
  private scriptURL = 'https://script.google.com/macros/s/AKfycbxZClxGzOMWsljJ4Y5CmXCc9yonKw333fWbvT1cIIYJM4Jjb1aIXPB5E124n-lL1nsY/exec';

  formData = {
    fullName: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  submitForm() {
    this.http.post(this.scriptURL, this.formData).subscribe({
      next: () => {
        alert('Message sent successfully!');
        this.formData = {
          fullName: '',
          email: '',
          mobile: '',
          subject: '',
          message: ''
        };
      },
      error: () => {
        alert('Error sending message. Try again.');
      }
    });
  }

}
