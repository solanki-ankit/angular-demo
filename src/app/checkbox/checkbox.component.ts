import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  name = 'Angular 6';
  model: any = {};
  emails = [{ email: "email1" }, { email: "email2" }, { email: "email3" }, { email: 'email4' }]
  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      useremail: this.fb.array([])
    });
    this.model.edu = [];
  }
  onChange(email: string, isChecked: boolean) {
    const emailFormArray = <FormArray>this.myForm.controls.useremail;

    if (isChecked) {
      emailFormArray.push(new FormControl(email));
    } else {
      let index = emailFormArray.controls.findIndex(x => x.value == email)
      emailFormArray.removeAt(index);
    }
  }

  formonChange(email: string, isChecked: boolean) {
    if (isChecked) {
      this.model.edu.push(email);
    } else {
      let index = this.model.edu.indexOf(email);
      if (index > -1) {
        this.model.edu.splice(index, 1);
     }
    }
  }
}
