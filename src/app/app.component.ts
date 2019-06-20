import { Component } from "@angular/core";

@Component({
  selector: "pha-root",
  template: `
    <mat-toolbar color="primary">
      <span>{{ title }}</span>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = "Ng Photo Albums";
}
