import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Menu } from '../menu.model';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
//   template: `
  
// `,
  styleUrls: ['./menuitem.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class MenuitemComponent {
  @Input() menu: Menu = [];
  step = 0;
  constructor() { }

  ngOnInit(): void {

    console.log(this.menu)
  }

  setStep(index: number) {
    this.step = index;
  }

}
