import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  imports: [FormsModule],
  standalone: true
})
export class ContactFormComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    console.log('Messaggio inviato:', this.formData);
    alert('Grazie per averci contattato!');
    this.formData = { name: '', email: '', message: '' };
  }
}