import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, NgClass],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.isSubmitting = true;
      this.submitMessage = '';

      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.submitMessage = 'Thank you for your message! We will get back to you soon.';

        // Reset form after 3 seconds
        setTimeout(() => {
          form.resetForm();
          this.submitMessage = '';
        }, 3000);
      }, 1000);
    }
  }
}
