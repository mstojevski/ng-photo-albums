import { Component } from "@angular/core";

@Component({
  selector: "pha-root",
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <mat-toolbar color="primary">
      <span>{{ title }}</span>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = "Photo Album App";
}
