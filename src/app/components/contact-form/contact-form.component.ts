import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  imports: [FormsModule, CommonModule],
  standalone: true
})
export class ContactFormComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  phoneNumber = '393406184009';
  submitted = false;

  get isEmailFormValid(): boolean {
    return (
      this.formData.name.trim() !== '' &&
      this.formData.email.trim() !== '' &&
      this.formData.message.trim() !== ''
    );
  }

  get isWhatsappValid(): boolean {
    return this.formData.message.trim() !== '';
  }

  submitForm() {
    if (!this.isEmailFormValid) return;

    emailjs.send(
      'service_4yu0yta',
      'template_3218k7f',
      {
        from_name: this.formData.name,
        from_email: this.formData.email,
        message: this.formData.message,
      },
      'DOAqcMs2N-McC6_rV'
    )
    .then(() => {
      this.submitted = true;
      this.formData = { name: '', email: '', message: '' };
    })
    .catch((error) => {
      console.error('Errore invio mail', error);
      alert('Errore nell’invio del messaggio');
    });
  }

  sendOnWhatsapp() {
    if (!this.isWhatsappValid) return;

    const message = this.formData.message;
    const url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}