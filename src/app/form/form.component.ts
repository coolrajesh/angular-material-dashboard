import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl,Validators,FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})

export class FormComponent {

  registerForm!: FormGroup;
  fieldRequired: string = "This field is required"
  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  this.registerForm = new FormGroup(
    {'username': new FormControl(null,[Validators.required]),
    'email': new FormControl(null,[Validators.required, Validators.pattern(emailregex)]),
    'password': new FormControl(null, [Validators.required]),
   }
  )


}


onSubmit(formData: FormGroup, formDirective: FormGroupDirective): void {
 
  const email = formData.value.email;
  const password = formData.value.password;
  const username = formData.value.username;  
  formDirective.resetForm();
  this.registerForm.reset();
}

}
