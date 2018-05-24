import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';


@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
  providers: [
    MovieProvider
  ]
})
export class MoviesPage {

  public lista_filmes = Array<any>(); 

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public movieProvider: MovieProvider) {
  }

  ionViewDidLoad() { 
    this.movieProvider.getPopularMovies().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;

        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    )

    console.log('ionViewDidLoad MoviesPage');
  }

}
