import { Component , OnInit } from '@angular/core';
//   import { Router } from '@angular/router';
import { FormGroup,ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
// import { CustomFormsModule } from 'ng2-validation'
// // Services
// import { FormsService } from './../../services/forms';
 import { MyDataService } from './../../my-data.service';
// // External
// // import { AngularFireAuth } from 'angularfire2/auth';
// // import { CookieService } from 'ngx-cookie-service';
 import { CookieService } from 'ngx-cookie-service';
import { Http,Headers,Response, RequestOptions } from '@angular/http';
 import { login } from 'app/models/login';
 import { Observable } from 'rxjs';
 import 'rxjs/add/operator/map'
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';

 @Component({
 templateUrl: './login.component.html'
 })
 export class LoginComponent {
    private sampleForm: FormGroup;
    isValidFormSubmitted = null;
    submitted: boolean;
    display2='none';
    public isTrue:any = {};
     


   
cookieValue = 'default';

 public _Array1: login;
 hash;
  userForm = new FormGroup({
   email_id: new FormControl(""),
   password: new FormControl(""),
   
  });
  constructor(private cookieService: CookieService, private http: Http,private newService: MyDataService,private router:Router,private _md5: Md5)
 {
     this.userForm = new FormGroup({
        email_id: new FormControl('', [Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]),
        password: new FormControl('', Validators.required)
     });
}

onSubmit(userForm) {
    alert(1)
    this.isTrue=100;
    this.submitted=true;
    this.router.navigate(['/dashboard']);

    this.cookieService.set( 'appCookie', JSON.stringify('this._Array1'));

    
//     if(this.userForm.value.email_id == undefined || this.userForm.value.email_id == '' || this.userForm.value.password == undefined || this.userForm.value.password == ''){
//         this.isValidFormSubmitted = false;
//    }
  

//  else{

    const email = (<HTMLInputElement>document.getElementById('txtEmail'));
    const filter = /^[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/;
    if (!filter.test(email.value)) {
    }else {

    
     this.userForm.value.password = Md5.hashStr(this.userForm.value.password);
    
    // this.newService.login(this.userForm.value).subscribe( resultArray => {
    //   this._Array1 = resultArray,this._Array1.message;
           
    //   if (this._Array1.error === false) {
        this.cookieService.set( 'appCookie', JSON.stringify(this._Array1));
        // console.log(this._Array1 = resultArray)
       
       
    // }
    // else{
       
    //     this.userForm.controls['password'].patchValue('');
    //     this.display2="block"
       
      
        
    // }

    // });
  
}

this.submitted=false;
    this.isValidFormSubmitted = false;
       if (this.userForm.invalid) {
          return;
       }
       this.isValidFormSubmitted = true;
       let user: login = this.userForm.value;
       
    //    this.newService.login(userForm);
    
    
    // }
}

//     get email() {
//        return this.userForm.get('email_id');
//     } 
//     hidePopup()
//    { 
//       this.display2="none";
      
//   }

  }









