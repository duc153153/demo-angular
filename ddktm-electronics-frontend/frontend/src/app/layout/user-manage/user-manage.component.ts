import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user/user';
import { UserService } from 'src/app/shared/api/user-api/user.service';
import { pipe } from '@angular/core/src/render3';
import { DatePipe } from '@angular/common';
import * as $ from 'jquery';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent implements OnInit {
  page_actual: number = 1;
  total_page;
  array_total_page;
  User:User; 
  user_data:any = {};
  notification:any;
  convert_data;
  add_or_update;
  err:any = {};
  current_date;format_date;

  testingForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    name : new FormControl('', Validators.required)
  })
  submitted: boolean;

  constructor(public user_api: UserService) { }

  ngOnInit() {
    this.loadUsers(this.page_actual);
  }

  // checkValid(field: string) {
  //   return (this.testingForm.get(field).touched || this.submitted)
  // }

  loadUsers($page_number){
    return this.user_api.show(this.page_actual).subscribe(
      data => {
        this.convert_data = data;
        // this.array_total_page = Array(this.convert_data.last_page).fill(1).map((x,i)=>i);

        // gen array with key from number!
        this.array_total_page = Array.from(Array(this.convert_data.last_page).keys())
        this.total_page=this.convert_data.last_page
        this.User = this.convert_data.data;
        console.log(data)
      },
      error => console.log(error.error.message)
    )
  }

  switchToCreate() {
    this.add_or_update = "create";
    this.user_data={status_id:1};

  }

  switchToUpdate($user) {
    this.add_or_update = "update";
    // this.user_api.find($id).subscribe(
      // data => this.user_data = data,
    //   error => console.log(error.error.message)
    // );
    // console.log(this.user_data);
    this.user_data=$user;
    
  }



  
  

  updateOrCreateUser() {
    //format date with yyyy/MM/dd
    this.current_date = new Date();
    this.format_date = this.current_date.getFullYear() + '-' + (this.current_date.getMonth()+1)+'-'+this.current_date.getDate()
    if(this.add_or_update === 'update'){
      
      
      this.user_data.updated_at = this.format_date;
      console.log(this.user_data.updated_at)
      this.user_api.update(this.user_data.id, this.user_data).subscribe(
        data => {
          this.notification=data;
          this.closeModel();
          this.loadUsers(this.page_actual);
        },
        error => {
          // console.log(error.error.errors.phone[0])
          this.err.phone = error.error.errors.phone;
          this.err.email = error.error.errors.email;
          this.err.name = error.error.errors.name;
          console.log(this.err)
        }
      );
    }else {
      
      this.user_data.created_at = this.format_date;
      this.user_data.updated_at = this.format_date;
      this.user_api.create(this.user_data).subscribe(
        data => {
          this.notification=data;
          this.closeModel();
          this.loadUsers(this.page_actual);
        },
        error => {
          this.err.phone = error.error.errors.phone;
          this.err.email = error.error.errors.email;
          this.err.name = error.error.errors.name;
          console.log(this.err)
        } 
      )
    }
    
  }

  previousPage(){
      if($number=>1){
        this.page_actual-=1;
        this.loadUsers(this.page_actual);
      }
      this.page_actual=1;
  }

  currentPage($number:number){
    this.page_actual=$number+1;
    this.loadUsers(this.page_actual);
  }

  nextPage(){
    console.log(this.page_actual+' '+this.total_page)
    if(this.page_actual<this.total_page){
      this.page_actual+=1;
      this.loadUsers(this.page_actual);
    }
  }

  closeModel(){
    $("#myModal").modal("hide");
          $('.modal-backdrop').css('zIndex',-1);
  }
}
