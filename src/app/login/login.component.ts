import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { User } from  '../user';
import { AuthService } from  '../auth.service';
import { DataService } from '../data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    isSubmitted  =  false;
    constructor(private router:Router,private authService: AuthService,
       private formBuilder: FormBuilder,private DataService:DataService) {
     
     }    
      
      
    ngOnInit() {   
        this.loginForm  =  this.formBuilder.group({
            Email: ['', [Validators.required,Validators.email]],
            Password: ['', Validators.required],
            // email: new FormControl('', Validators.compose([
            //   Validators.required,
            //   Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            // ]))
        }); 
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn) {
         // this.login();
          this.router.navigate(['home']);
        }
      sessionStorage.clear();    
    }  
    get formControls() { return this.loginForm.controls; }  
    // firstClick() {
    //     this.router.navigate(['about/priyanshi']);
    //   }
      createForm() {
        this.loginForm = this.formBuilder.group({
            Email: ['', [Validators.required ,Validators.email]],
           Password: ['', [Validators.required, Validators.minLength(6)]]
        });
      }
      login(){
        this.isSubmitted = true;
        if (!this.loginForm.valid) {
          return;
        }
        //console.log('Hello',this.loginForm.value);
        this.DataService.postusers(this.loginForm.value).subscribe(
          (Response: any) => {
            console.log('response', Response)
      if (Response) {
        if (Response.Status == 'true') {
          localStorage.setItem('isLoggedIn', 'true');
          console.log(localStorage.getItem('isLoggedIn'));
         //alert('Success');
        } else {
          localStorage.removeItem('isLoggedIn');
        }
        this.router.navigate(['home']);
      } else {
        alert('Sorry ! Please try again a later.');
      }
    })

  }
      //   this.isSubmitted = true;
      //   if(this.loginForm.invalid){
      //     return;
      //   }
      //   else{
      //     this.DataService.postusers().subscribe(
      //       response => {
      //         console.log(response)
      //       },
      //       err => {
      //         console.log(err);
      //       }
      //     );
      //   }
      //   this.authService.login(this.loginForm.value);
      //   this.router.navigateByUrl('about/priyanshi');
      // }
  }

  
