import { Component, OnInit } from '@angular/core';
import { ApiServiceService} from '../../../services/api-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private apiservice:ApiServiceService) { }

  ngOnInit(): void {
    //console.log(this.apiservice.getPosts());
    this.apiservice.getPosts().subscribe((data: any[]) => {
      console.log(data);
    });
  }

}
