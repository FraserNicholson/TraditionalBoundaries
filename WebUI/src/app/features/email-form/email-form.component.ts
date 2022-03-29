import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})

export class EmailFormComponent {

  constructor() { }

  response = '';
  submitted = false;

  emailForm = new FormGroup({
    fromEmail: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    name: new FormControl(''),
    phoneNumber: new FormControl(''),
    body: new FormControl('',[
      Validators.required
    ]),
  })

  public sendEmail(e: Event) {
    e.preventDefault();

    if (isNaN(this.emailForm.controls.phoneNumber.value)) {
      this.response = 'Phone number must be valid';
      return;
    }

    if (this.emailForm.controls.fromEmail.value == null
       || this.emailForm.controls.body.value == null) {
         this.response = 'Please fill in the required fields';
         return;
    }

    if (this.emailForm.controls.fromEmail.invalid) {
      this.response = 'Please enter a valid email address'
      return;
    }

    emailjs.send('service_ph02dre', 'template_s3p4o9g', {
      name: this.emailForm.controls.name.value,
      fromEmail: this.emailForm.controls.fromEmail.value,
      phoneNumber: this.emailForm.controls.phoneNumber.value,
      body: this.emailForm.controls.body.value
    }, 
    'user_89Ms4j9Coer4T2WRyxWiB')
      .then((result: EmailJSResponseStatus) => {
        this.emailForm.reset();
        this.submitted = true;
        this.response = 'Email succesfully sent';        
        }, (error) => {
        this.response = 'An unexpected error has occured';
        });
    }

}
