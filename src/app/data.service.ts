// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// // export class DataService {

// //   constructor() { }
// // }
// export class DataService {

//   constructor() { }

//   firstClick() {
//     return console.log('clicked');
//   }
// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here
import { map } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  // public requestDataFromMultipleSources(): Observable<any[]> {
  //   let response1 = this.http.get('https://jsonplaceholder.typicode.com/users');
  //   let response2 = this.http.get('https://jsonplaceholder.typicode.com/posts');
  //   // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
  //   return forkJoin([response1, response2]);
  // }

  getUsers() {
     return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe(map((response: Response) => { return response }))
      // .pipe(catchError(this.handleError));
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .pipe(map((response: Response) => { return response }))
      // .pipe(catchError(this.handleError));
  }
  postusers(data: {Email: String, Password: String }) {
    // return this.http.post('http://localhost:55720/api/User/UserResgister', {
    //   "FullName":"Neeraj Tapadiya",
    //   "Email":"neeraj@mailinator.com",
    //   "Password":"abc@123",
    //   "PhoneNumber":"8317009945",
    //   "Address":"Anpurna Indore"
    // })
    return this.http.post('http://192.168.0.60/angularapi/api/Account/Login', data)
     .pipe(map((response: Response) => { return response }))
     // .pipe(catchError(this.handleError));
 }

}


