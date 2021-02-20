import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit, OnDestroy {

  constructor(private myService: UsersService, private myActivatedRoute: ActivatedRoute) { }

  /*validation on editing*/
  myForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]*"), Validators.maxLength(8)]),
    lastName: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]*"), Validators.maxLength(8)]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]{1}[a-zA-Z0-9.\-_]*@[a-zA-Z]{1}[a-zA-Z.-]*[a-zA-Z]{1}[.][a-zA-Z]{2,}$")]),
    phone: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    username: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required, Validators.minLength(10)]),
    confirmpassword: new FormControl('', [Validators.required, Validators.minLength(10)]),
    country: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]*")]),
    city: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]*")]),
    street: new FormControl('', [Validators.required]),
  })

  /*save changes*/
  saveChanges() {
    // console.log(this.myForm.controls)
    if (this.myForm.valid) {
      console.log("valid")
      // this.myForm.value
      console.log(this.myForm.value)
    }
    else {
      console.log("invalid")
    }
    // console.log(this.myForm.controls.firstName.value)
    // console.log(this.myForm.controls.firstName.errors)
  }

  /*edit profilr*/
  // register(){
  //   console.log(this.myForm.controls)
  //   if(this.myForm.valid){
  //     this.myForm.value
  //     console.log("ssss")
  //     console.log(this.myForm.valid)
  //   }
  /*edit profile*/
  // this.subscriber = this.myService.editUser(3,this.user)
  // .subscribe((user) => {
  //   console.log(user);
  //   this.user = user;
  //   this.myForm.patchValue({
  //     firstName: this.user.firstName,
  //     lastName :this.user.lastName,
  //     email: this.user.email,
  //     phone: this.user.phone,
  //     username: this.user.username,
  //     country: this.user.country,
  //     city: this.user.city,
  //     street: this.user.street
  //   })
  // },
  //   (error) => {
  //     console.log(error);
  //   }
  // )
  // }

  user
  subscriber

  /*get all users*/
  getAllUsers() {
    this.subscriber = this.myService.getUsers()
      .subscribe((user) => {
        console.log(user);
        this.user = user;
      },
        (error) => {
          console.log(error);
        }
      )
  }

  /*get user by id*/
  // this.subscriber = this.myService.getUserById(this.myActivatedRoute.snapshot.params.id)
  showProfile() {
    this.subscriber = this.myService.getUserById(1)
      .subscribe((user) => {
        console.log(user);
        this.user = user;
        this.myForm.patchValue({
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
          phone: this.user.phone,
          username: this.user.username,
          password: this.user.password,
          country: this.user.country,
          city: this.user.city,
          street: this.user.street
        })
      },
        (error) => {
          console.log(error);
        }
      )
  }


  /*delete user by id*/
  deleteAccount() {
    var confirmationDel = confirm("Are you sure you want to delete your account?")
    if(confirmationDel){
      this.subscriber = this.myService.deleteUser(4)
      .subscribe(() => {
        console.log("deleted succ");
      },
        (error) => {
          console.log(error);
        }
      )
    }
  }


  /*oninit*/
  ngOnInit(): void {
    this.showProfile()
  }

  /*destroy*/
  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

}