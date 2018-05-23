import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieProvider {

  private baseApiPath = 'https://api.themoviedb.org/3';

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies(){
    return this.http.get(this.baseApiPath + '/movie/latest?api_key=' + this.getApiKey());
  }

  getPopularMovies(){
    return this.http.get(this.baseApiPath + '/movie/popular?api_key=' + this.getApiKey());
  }

  getApiKey(): string{
    return 'de5823fe99ed5c1cd204f65c5d0c86a3';
  }
}