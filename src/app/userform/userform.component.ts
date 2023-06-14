import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
})




export class UserformComponent implements OnInit{
  userForm!: FormGroup;
  // formData: UserForm;


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
      alert('Fix errors on form');
    }else{
      alert('Success! Form completed!');
      console.log(this.userForm.value);
      this.userForm.reset();
    }
  }



  passwordMatch(c: AbstractControl): { [key: string]: boolean } | null {
    // console.log('password function here');
    const password = c.get('password');
    const confirmPassword = c.get('confirmPassword');
    if (password?.value && confirmPassword?.value && password.value !== confirmPassword.value) {
      return { 'mismatch': true };
    }
    return null;
  }




  ngOnInit() {



    // interface UserForm{
    //   fName: string;
    //   lName: string;
    //   email: string;
    //   address: string;
    //   city: string;
    //   zipCode: string;
    //   phoneNumber: string;
    //   passwordGroup: {
    //     password: string | null;
    //     confirmPassword: string | null;
    //   };
    // }

    // this.formData = {
    //   fName: '',
    //   lName: '',
    //   email: '',
    //   address: '',
    //   city: '',
    //   zipCode: '',
    //   phoneNumber: '',
    //   passwordGroup: {
    //     password: null,
    //     confirmPassword: null
    //   }
    // };

    
      this.userForm = this.formBuilder.group({
        fName: ['', [Validators.required, Validators.minLength(2)]],
        lName: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.minLength(2)]],
        address: ['', [Validators.required, Validators.minLength(2)]],
        city: ['', [Validators.required, Validators.minLength(2)]],
        zipCode: ['', [Validators.required, Validators.minLength(2)]],
        phoneNumber: ['', [Validators.required, Validators.minLength(2)]],
        passwordGroup: this.formBuilder.group({
          password: null,
          confirmPassword: null
        }, {validator: this.passwordMatch}),
      });




}}
