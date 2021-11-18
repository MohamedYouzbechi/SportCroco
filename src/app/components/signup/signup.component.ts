import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/validators/confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  name='mohAmmEd';
  imagePreview:string;
  constructor(private formBuilder:FormBuilder, private userService:UserService, private router:Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName:['',[Validators.required, Validators.minLength(3)]],
      lastName:[''],
      email:['',[Validators.required, Validators.email]],
      pwd:['',[Validators.minLength(3), Validators.maxLength(12)]],
      confirmPwd:[''],
      img:['']
    },
    {
      validator: MustMatch('pwd','confirmPwd')
    });
  }
  signup(){
    console.log('signup object', this.signupForm.value);
    this.userService.signup(this.signupForm.value, this.signupForm.value.img).subscribe(
      (data)=> {
        console.log('Added with success', data.message);
        this.router.navigate(['']);
      }
    )
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];//pour get limage choisi (files[0]:on a une seule image dans notre cas: cela signefi que on peut choisir plusieurs files)
    this.signupForm.patchValue({ img: file }); // c'est pour patcher l'image dans l'attr img
    this.signupForm.updateValueAndValidity(); // c'est pour actualiser signupForm
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string // c'est pour transformer l'image en string (base64)
    };
    reader.readAsDataURL(file);
    }

}
