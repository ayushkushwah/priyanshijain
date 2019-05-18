// import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-root',
// //   templateUrl: './app.component.html',
// //   styleUrls: ['./app.component.scss']
// // })
// // export class AppComponent {
// // title = 'HelloSurendraSir';
// // }
// @Component({
//   selector: 'app-root',
//   template: `
//     <button (click)="onClickMe()">Click me!</button>
//     {{clickMessage}}`
// })
// export class ClickMeComponent {
//   title='Angular Example';
//   clickMessage = '';

//   onClickMe() {
//     this.clickMessage = 'You are my hero!';
//   }
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my app';
}
