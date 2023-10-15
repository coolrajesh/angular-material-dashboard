import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  OnInit
} from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-footer',
//   template: `
  
// `,
// styles: [
//   `
//     .spacer {
//       flex: 1 1 auto;
//     }

//     .title {
//       cursor: pointer;
//     }

//     .welcome-text {
//       font-size: smaller;
//     }
//   `
// ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: '#3f51b5'},
    {text: 'Two', cols: 1, rows: 2, color: '#3f51b5'},
    {text: 'Three', cols: 1, rows: 1, color: '#3f51b5'},
    {text: 'Four', cols: 2, rows: 1, color: '#3f51b5'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
