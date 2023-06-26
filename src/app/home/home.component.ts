import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  //templateUrl: './home.component.html',
  template: `
  <app-pageheader icon="home">
    <h2>Home</h2>

    <button
      routerLink="/sales"
      mat-flat-button
      color="primary"
      class="action"
    >
      <mat-icon class="mr-2">add</mat-icon>
      <span>New sale</span>
    </button>
  </app-pageheader>

  <div style="padding: 0 20px">
    Hello from Home
  </div>
`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
