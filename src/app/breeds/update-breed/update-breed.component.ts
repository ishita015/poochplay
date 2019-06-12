import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../../my-data.service';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { listbreedcategory } from './../../models/listbreedcategory';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { addbreed } from './../../models/addbreed';
import { ActivatedRoute } from '@angular/router';
import { updateb } from './../../models/updateb';
import { viewbreed } from 'app/models/viewbreed';

@Component({
  templateUrl: './update-breed.component.html',

})
export class UpdateBreedComponent {
  // isValidFormSubmitted = null;
  public updateb: object = {}
  public  image: String = "";
  public  imagenew:String ="";
  display2 = 'none';
  public message: string;
  public imageHide: boolean;
  public imageLoader: boolean = true;
  public addbreed: object = {}
  public updatebreeds: updateb;
  public ub: any;
  public breed_id: string;
  display3 = 'none';
  breeds: any = {}
  userForm: FormGroup;
  public _Array7: listbreedcategory;
  public breedcategory: any = {}
  public _Array: updateb;

  constructor(private apiSerivce: MyDataService, route: ActivatedRoute) {
    this._Array = new updateb()
    this.breed_id = route.snapshot.params['breed_id'];
  }
  ngOnInit(): void {
    this.editbreed();
    this.apiSerivce.listbreedcategory({ 'breed_category_id': '' }).subscribe(resultArray => this.breedcategory = resultArray, )
    console.log(this.breedcategory);

  }

  public editbreed() {
    this.imageLoader = true
    /* For Breed Detail Services  */
    this.apiSerivce.editbreed({ 'breed_id': this.breed_id }).subscribe(resultArray => {
      console.log(resultArray),
      this.imageLoader = false
      if (resultArray.response.image_path == '') {
      }
      else {

      }
      this.updatebreeds = resultArray.response
      // this.userForm = new FormGroup({
      //   // breed_id : new FormControl(this.updatebreeds.breed_id,Validators.required),
      //   breed_name : new FormControl(this.updatebreeds.breed_name,Validators.required),
      //   breed_category_id: new FormControl(this.updatebreeds.breed_category_id,Validators.required),
      //   origin:new FormControl(this.updatebreeds.origin,Validators.required),
      //   life_span:new FormControl(this.updatebreeds.life_span,Validators.required),
      //   weight_male:new FormControl(this.updatebreeds.weight_male,Validators.required),
      //   weight_female:new FormControl(this.updatebreeds.weight_female,Validators.required),
      //   height_male:new FormControl(this.updatebreeds.height_male,Validators.required),
      //   height_female:new FormControl(this.updatebreeds.height_female,Validators.required),
      //   stride_length:new FormControl(this.updatebreeds.stride_length,Validators.required),
      //   move_per_mile:new FormControl(this.updatebreeds.move_per_mile,Validators.required),
      //   active_minute:new FormControl(this.updatebreeds.active_minute,Validators.required),
      //   temperament:new FormControl(this.updatebreeds.temperament,Validators.required),
      //   target:new FormControl(this.updatebreeds.target,Validators.required),
      //   manual_activity:new FormControl(this.updatebreeds.manual_activity,Validators.required),
      //   image_path:new FormControl(""),
      //   imagenew:new FormControl(""),
      // });
    })
  }
  public updatebreed(userForm: NgForm) {
    this.ub.updatebreed(userForm.value);
  }


  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();
    myReader.onloadend = (e) => {
      var file = this.updatebreeds.image_path;
      var reg = this.updatebreeds.image_path.replace(/^.*\./, '');
      if (reg == "jpg" || reg == "png" || reg == "jpeg") {
        this.imagenew = myReader.result;
      }
      else {
        this.display3 = "block";
        this.updatebreeds.image_path = "";
        // this.imagenew = '';
      }
    }
    myReader.readAsDataURL(file);
  }

  onSubmit(userForm) {
    userForm.image_path = this.imagenew;
    if (userForm.breed_name == undefined ||
      userForm.manual_activity == undefined ||
      userForm.manual_activity == '' ||
      userForm.target == undefined ||
      userForm.target == '' ||
      userForm.temperament == undefined ||
      userForm.temperament == '' ||
      userForm.active_minute == undefined ||
      userForm.active_minute == '' ||
      userForm.move_per_mile == undefined ||
      userForm.move_per_mile == '' ||
      userForm.stride_length == undefined ||
      userForm.stride_length == '' ||
      userForm.height_female == undefined ||
      userForm.height_female == '' || userForm.height_male == undefined
      || userForm.height_male == ''
      || userForm.weight_male == undefined
      || userForm.weight_female == undefined ||
      userForm.weight_female == '' || userForm.weight_male == ''
      || userForm.life_span == undefined || userForm.life_span == ''
      || userForm.breed_category_id == undefined || userForm.origin == undefined
      || userForm.breed_name == '' || userForm.breed_category_id == ''
      || userForm.origin == '') {
        // this.isValidFormSubmitted = false;
      this.imageLoader = false;
      this.hidePopup()
    }
    else {
      console.log(this.imagenew)
      userForm.imagenew = this.imagenew
      if (userForm.imagenew != undefined && userForm.imagenew != '') {
        userForm.image_path = userForm.imagenew;
        userForm.imagenew = '';

      }
      else {
        userForm.image = '';
      }

      this.imageLoader = true;
      console.log(userForm)
      /* For Update Breed Services  */
      this.apiSerivce.updatebreed(userForm).subscribe(resultArray => {
        this._Array = resultArray, data => { alert("Success Adding"), this._Array.error, this._Array.message }
        this.imageLoader = false;
        this.message = this._Array.message;
        this.display2 = "block";
        this._Array.message
      
        // this.isValidFormSubmitted = false;
        this._Array = this.updatebreeds;
               this.apiSerivce.updatebreed(this._Array);
        error => {
          error;
        }
      })
    }
  }

  handleFileSelect($event): void {

    this.readThis($event.target);
    this.imageHide = true;
  }
  hidePopup() {
    this.display2 = "none";
    // window.location.reload();
    this.imageLoader = false;
  }
  hidePopup1() {
    this.display3 = "none";
  }

}
