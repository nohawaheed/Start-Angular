import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  contactUsForm: FormGroup = new FormGroup({
    userName: new FormControl(null, [
      Validators.required,
      Validators.maxLength(8),
      Validators.minLength(3),
    ]),
    userEmail: new FormControl(null, [Validators.required, Validators.email]),
    userPhone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
    userMessage: new FormControl(null, [
      Validators.required,
      Validators.minLength(50),
      Validators.maxLength(500),
    ]),
  });
  submitForm(formInfo: FormGroup) {
    console.log(formInfo.value);
  }
  ngOnInit(): void {}
}
