import { Injectable } from  '@angular/core';
import { HttpClient, HttpHeaders} from  '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { News } from './news';
import { NewsSerializer } from './news.serializer';
import { Article } from './article';

@Injectable({
    providedIn: 'root'
  })

export class ApiService {
   
    API_URL  =  'https://newsapi.org/v2/';
    branch = 'top-headlines';
    country = 'de';


    api_key = '';

    constructor(private http:HttpClient) { }
    initSources(){
        return this.http.get('https://newsapi.org/v2/sources?language=de&apiKey='+this.api_key);
    }
    initArticles(){
        return this.http.get('https://newsapi.org/v2/top-headlines?language=de&apiKey='+this.api_key);
    }
    getArticlesByID(source: String){
        return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
    }

    

}
