import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HomeComponentService} from './home.component.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data = [];

  constructor(private router: Router, private homeService: HomeComponentService) {

  }

  ngOnInit() {
    this.getObservable();
  }

  getObservable() {
    this.homeService.getData().subscribe((data: any) => {
        this.data = data.items;
        console.log(JSON.stringify(data));
      },
      (err) => {
        console.log('Error');
      }, () => {
        console.log('completed');
      });
  }


}
