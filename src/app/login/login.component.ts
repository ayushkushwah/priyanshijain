import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PushNotificationOptions, PushNotificationService } from 'ngx-push-notifications';

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
       private formBuilder: FormBuilder,private DataService:DataService,private _pushNotificationService: PushNotificationService) { 
        const isGranted = this._pushNotificationService.isPermissionGranted; 
     
     }    
      
      
    ngOnInit() {   
      
      this.myFunction();
      
        this.loginForm  =  this.formBuilder.group({
            Email: ['', [Validators.required,Validators.email]],
            Password: ['', Validators.required],
            // email: new FormControl('', Validators.compose([
            //   Validators.required,
            //   Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            // ]))
        }); 
        this._pushNotificationService.requestPermission();
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn) {
         // this.login();
          this.router.navigate(['home']);
        }
      sessionStorage.clear();    
    }  
    myFunction() {
      const title = 'Hello';
      const options = new PushNotificationOptions();
      options.body = 'Native Push Notification';

      alert('gfhfhg');
   
      this._pushNotificationService.create(title, options).subscribe((notif) => {
        if (notif.event.type === 'show') {
          console.log('onshow');
          setTimeout(() => {
            notif.notification.close();
          }, 3000);
        }
        if (notif.event.type === 'click') {
          console.log('click');
          notif.notification.close();
        }
        if (notif.event.type === 'close') {
          console.log('close');
        }
      },
      (err) => {
           console.log(err);
      });
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
        this.myFunction();
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

  
