  import { Component, OnInit } from '@angular/core';
  import {ActivatedRoute} from '@angular/router';
  import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  url;
  constructor(private route: ActivatedRoute, private  sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.route.snapshot.params['id']);
  }

}
