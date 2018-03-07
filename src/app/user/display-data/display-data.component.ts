import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {
  @Input() title = '';
  @Input() thumbnail = [];
  @Input() id = '';
  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.title);
  }

  goTo(route: string){
    this.router.navigate([route]);
  }

}
