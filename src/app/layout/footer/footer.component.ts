import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  OnInit
} from '@angular/core';


@Component({
  selector: 'app-footer',
  template: `
  <mat-toolbar color="primary">
  <div class="col">
        <h3>Title</h3>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
        <div>Lorem ipsum dolor sit amet.</div>
        <div>Line 3</div>
      </div>
      <div class="col">
        <h3>Title</h3>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
        <div>Lorem ipsum dolor sit amet.</div>
        <div>Line 3</div>
      </div>
      <div class="col">
        <h3>Title</h3>
        <div>Line 2</div>
        <div>Line 3</div>
      </div>
      <div class="col">
        <h3>Title</h3>
        <div>Line 2</div>
      </div>
    
    <section class="section-bottom">
      <div>Follow</div>
      <div>Copy right</div>
    </section>
  </mat-toolbar>
`,
styles: [
  `
    .spacer {
      flex: 1 1 auto;
    }

    .title {
      cursor: pointer;
    }

    .welcome-text {
      font-size: smaller;
    }
  `
],
  // templateUrl: './footer.component.html',
  // styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
