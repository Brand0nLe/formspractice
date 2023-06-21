import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, FormArray, EmailValidator } from '@angular/forms';


interface UserForm{
  fName: string;
  lName: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  phoneNumber: string;
  passwordGroup: {
    password: string | null;
    confirmPassword: string | null;
  };
}

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
})
export class UserformComponent implements OnInit {
  userForm!: FormGroup;
  formData!: UserForm;
  
  cereal = this.formBuilder.group({
    frostedflakes: false,
    cinnamontoastcrunch: false,
    luckycharms: false,
    frootloops: false,
    cheerios: false,
    ihatecereal: false,
  });


  constructor(private formBuilder: FormBuilder){}

  setValue(){
    this.userForm.setValue({
      fName: '',
      lName: '',
      email: '',
      address: '',
      city: '',
      zipCode: '',
      phoneNumber: ''
    });
  }


  patchValue(){
    this.userForm.patchValue({
      fName: '',
      lName: '',
      email: '',
      address: '',
      city: '',
      zipCode: '',
      phoneNumber: ''
    });
  }



  submitForm(){
    if(this.userForm.invalid){
      alert('Fix errors on form and make sure no fields are left empty.');
    }else{
      alert('Success! Form completed!');
      console.log(this.userForm.value);
      this.userForm.reset();
    }
  }



  passwordMatch(c: AbstractControl): { [key: string]: boolean } | null {
    const password = c.get('password');
    const confirmPassword = c.get('confirmPassword');
    if (password?.value && confirmPassword?.value && password.value !== confirmPassword.value) {
      return { 'mismatch': true };
    }
    return null;
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      fName: ['', [Validators.required, Validators.minLength(2)]],
      lName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.minLength(2)]],
      city: ['', [Validators.required, Validators.minLength(2)]],
      zipCode: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern('^[0-9]*$')]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
      passwordGroup: this.formBuilder.group({
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
      }, {validator: this.passwordMatch}),
    });
  }
}