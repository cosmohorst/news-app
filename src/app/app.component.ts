import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { News } from './news';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'news-app';

  mArticles:Array<any>;
  mSources:Array<any>;

  constructor(public apiService: ApiService) {
  }

  ngOnInit() {
   //load articles
  this.apiService.initArticles().subscribe(data => this.mArticles = data['articles']);
  //load news sources
  this.apiService.initSources().subscribe(data=> this.mSources = data['sources']);  
  }


}
