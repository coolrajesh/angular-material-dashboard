import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  //templateUrl: './sales.component.html',
  template: `
    <app-pageheader icon="monetization_on">
      <h2>Sales</h2>

      <button routerLink="/home" mat-flat-button color="primary" class="action">
        <mat-icon class="mr-2">home</mat-icon>
        <span>Go home</span>
      </button>
    </app-pageheader>

    <div style="padding: 0 20px">
      Hello from Sales
    </div>
  `,
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
