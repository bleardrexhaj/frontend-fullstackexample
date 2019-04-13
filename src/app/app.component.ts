import {Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  private questions = [];
  constructor(private httpClient: HttpClient) {
    this.get_products();
  }
  get_products() {
    this.httpClient.get('http://localhost:8000/api/questions').subscribe((res: any[]) => {
      this.questions = res;
    });
  }
}
