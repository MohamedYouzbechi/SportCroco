import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm:FormGroup;
  user:any={}; //Declaration d'objet : Cela signefie que le Form de type TDF
  msgError:string;

  constructor(private formBuilder:FormBuilder,
              private userService:UserService,
              private router:Router) { }

  ngOnInit() {
    // this.LoginForm = this.formBuilder.group({
    //   email:[''],
    //   pwd:['']
    // })
  }

  login(){
    // console.log('user object', this.user);
    this.userService.login(this.user).subscribe(
      (data)=> {
        console.log('data test FE', data);

        if (data.msg != '2') {
          this.msgError = 'Please chek email/pwd';
        }else{
          this.router.navigate([`profile/${data.userToSend.id}`]);
        }
      }
    )
  }

}
