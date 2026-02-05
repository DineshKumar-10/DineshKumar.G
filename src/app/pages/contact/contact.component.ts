import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  isLoading = false;
  successMsg = '';
  errorMsg = '';

  formData = {
    fullName: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  };

  private GOOGLE_SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbxFn-R_jhQc4sXxfCnU97yu4kBRyhnQTqjzEmpf8YaZ-WVg0wWKutPFtdu50_0cfC45SQ/exec';

  constructor(private http: HttpClient) {}

  onSubmit(form: any) {
    if (form.invalid) return;

    this.isLoading = true;
    this.successMsg = '';
    this.errorMsg = '';

    this.http.post(this.GOOGLE_SCRIPT_URL, this.formData).subscribe({
      next: () => {
        this.successMsg = 'Message sent successfully ✅';
        this.isLoading = false;
        form.resetForm();
      },
      error: () => {
        this.errorMsg = 'Something went wrong ❌ Try again.';
        this.isLoading = false;
      }
    });
  }
}
