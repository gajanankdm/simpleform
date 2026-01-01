import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simpleform';
  @ViewChild('signUpForm')signUpForm!:NgForm

  onsubmit(form:NgForm){
    if(form.valid){
      console.log('form data:',form.value)

    }

  }
}
