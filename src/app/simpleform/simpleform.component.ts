import { Component, OnInit } from '@angular/core';
import { AuthService } from './../_services/auth.service';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {
  model: any = {};
  constructor(private auth: AuthService) { }
  formData = new FormData();
  ngOnInit() {
    
    // formData.append('email', data.email);
    // formData.append('image', data.avatar[0],'aaa.jpg');
    this.model.avatar = [];
  }
  onFileChange(event) {
    if(event.target.files.length > 0) {
      console.log(event);
      for(var i = 0; i< event.target.files.length; i++) {
        // this.model.avatar.push(event.target.files[i]);
        this.formData.append('userpic[]', event.target.files[i], event.target.files[i].name);

      }
      // event.target.files.forEach(file => {
        // this.model.avatar.push(file);
      // });
      // let file = event.target.files[0];
      // this.form.get('avatar').setValue(file);
      // this.model.avatar = file;
    }
  }

  onSubmit(){
    this.formData.append('email', this.model.email);
    this.auth.formUpload(this.formData)
    .subscribe(
			data => {
        console.log(data);
			},
			error => {
        var response = error._body;
        console.log('response', error);
			});
    console.log(this.model);
  }
}
