import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HomeComponentService {
  getData() {
    return this.http.get('https://www.googleapis.com/youtube/v3/search?order=date&part' +
      '=snippet&channelId=UCP4g5qGeUSY7OokXfim1QCQ&key=AIzaSyCmedFZ2QVVzQ1cElmU6kPM2PV5YEaQwhY' );
  }
  constructor(private http: HttpClient) {}
}
