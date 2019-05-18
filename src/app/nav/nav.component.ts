//import { Component, OnInit } from '@angular/core';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { Observable,Observer,Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
  export class NavComponent implements OnInit, OnDestroy {

    // customSubscrition: Subscription;
    appTitle = 'myapp';
    promise: Promise<any>;
    isLoggedIn = false;
    
    constructor(private router: Router) {
      this.promise = this.getPromise();
    }
    getPromise() {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve('myappp'), 3000);
      });
    }
    ngOnInit() {

      localStorage.getItem('isLoggedIn') ? this.isLoggedIn = true : this.isLoggedIn = false;

      // Creating Observable.
      // Create method takes function as a argument with Observer.
     // this.role = localStorage.getItem('role').toString();
    //   const myObservables = Observable.create((observer: Observer<string>) => {
  
    //     // Emit the first data package after 2 seconds.
    //     // next pushes the next data package.
    //     // Emitting string data types
    //     setTimeout(() => {
    //       observer.next('FIRST RESPONSE****:')
    //     }, 2000);
  
    //     // Emit the second data package after 4 seconds.
    //     // next pushes the next data package.
    //     // Emitting string data types
  
    //     setTimeout(() => {
    //       observer.next('SECOND RESPONSE****:')
    //     }, 4000);
  
    //     // Emit the error package after 5 seconds.
    //     // error emits the error response.
    //     // Emitting string data types
  
    //     setTimeout(() => {
    //       observer.error('ERROR RESPONSE****:')
    //     }, 5000)
  
    //     // Emits the complete.
    //     setTimeout(() => {
    //       observer.complete();
    //     }, 6000)
  
    //   });
  
   
    //   // Subsribe the observable
    //   // first callbacks take success.
    //   // second callbacks takes failure
    //   // third call backs takes completion.
    //   const customSubscrition = myObservables.subscribe((response: string) => {
    //     console.log("RESPONSE: ", response);
    //   },
    //     (error: string) => {
    //       console.log("FAILURE RESPONSE: ", error);
    //     },
    //     () => {
    //       // This will not be called since there is an error at 5 seconds before the completion.
    //       console.log("COMPLETION:");
    //     }
    //   );
    }
    logoutUser() {
      // localStorage.clear();
      localStorage.removeItem('isLoggedIn');
      this.router.navigate(['login']);
    }
    ngOnDestroy(){
      // unsubscribes the subscription.
      //this.customSubscrition.unsubscribe();
    }
  }

