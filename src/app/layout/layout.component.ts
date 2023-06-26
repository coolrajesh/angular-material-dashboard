import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { Menu } from './menu.model';


@Component({
  selector: 'app-layout',
  //templateUrl: './layout.component.html',  
  template: `
    <div>
      <app-header (menuToggled)="toggle()"></app-header>

      <mat-drawer-container>
        <mat-drawer mode="side" [opened]="opened">
          <app-menuitem [menu]="menu"></app-menuitem>
        </mat-drawer>

        <mat-drawer-content [class.margin-left]="opened">
          <router-outlet></router-outlet>
        </mat-drawer-content>
      </mat-drawer-container>
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {

  opened = true;

  toggle(): void {
    this.opened = !this.opened;
  }

  menu: Menu = [
    {
      title: 'Home',
      icon: 'home',
      link: '/home',
      color: '#ff7f0e',
    },
    {
      title: 'Statistics',
      icon: 'bar_chart',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Sales',
          icon: 'money',
          link: '/sales',
          color: '#ff7f0e',
          // subMenu:[
          //   {
          //     title: 'Sales',
          //     icon: 'money',
          //     link: '/sales',
          //     color: '#ff7f0e',
          //   }
          // ]
        },
        {
          title: 'Customers',
          icon: 'people',
          color: '#ff7f0e',
          link: '/sales',
        },
      ],
    },
    {
      title: 'Profile',
      icon: 'home',
      link: '/home',
      color: '#ff7f0e',
    },
    {
      title: 'Category',
      icon: 'home',
      link: '/home',
      color: '#ff7f0e',
      subMenu:[
        {
          title: 'view',
          icon: 'money',
          link: '/category',
          color: '#ff7f0e',
        }
      ]
    },
    {
      title: 'Product',
      icon: 'bar_chart',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Product',
          icon: 'money',
          link: '/sales',
          color: '#ff7f0e',
        }  
      ],
    },

    {
      title: 'Table',
      icon: 'bar_chart',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Basic Table',
          icon: 'money',
          link: '/sales',
          color: '#ff7f0e',
        },
        {
          title: 'Smart Table',
          icon: 'money',
          link: '/sales',
          color: '#ff7f0e',
        },
        {
          title: 'Data Table',
          icon: 'money',
          link: '/sales',
          color: '#ff7f0e',
        }      
      ],
    },

    {
      title: 'UI Elements',
      icon: 'bar_chart',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Icon',
          icon: 'money',
          link: '/sales',
          color: '#ff7f0e',
        },
        {
          title: 'Badge',
          icon: 'money',
          link: '/sales',
          color: '#ff7f0e',
        }
           
      ],
    },

    {
      title: 'Authentication',
      icon: 'bar_chart',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Sign In',
          icon: 'money',
          link: '/sales',
          color: '#ff7f0e',
        },
        {
          title: 'Sign Up',
          icon: 'money',
          link: '/sales',
          color: '#ff7f0e',
        },
        {
          title: 'Forgot Password',
          icon: 'money',
          link: '/sales',
          color: '#ff7f0e',
        }
           
      ],
    },
    {
      title: 'Error',
      icon: 'bar_chart',
      color: '#ff7f0e',     
    },
    {
      title: 'Pricing',
      icon: 'bar_chart',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Modern',
          icon: 'money',
          link: '/sales',
          color: '#ff7f0e',
        },
        {
          title: 'Table',
          icon: 'money',
          link: '/sales',
          color: '#ff7f0e',
        },      
           
      ],
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
