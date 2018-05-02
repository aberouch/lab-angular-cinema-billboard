import { Component, OnInit } from '@angular/core';
import { CinemaService} from '../services/movies.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers: [CinemaService]
})

export class MyHomeComponentComponent implements OnInit {

  constructor(private movieServe : CinemaService,
    private router: Router) { }

  ngOnInit() { }

  getMovieList(){
    return this.movieServe.getMovies();
  }
  
  movieList = this.getMovieList();

  viewDetails(id) {
    this.router.navigate(['/:id', id]);
  }
}
