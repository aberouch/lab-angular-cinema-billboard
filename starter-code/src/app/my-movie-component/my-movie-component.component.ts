import { Component, OnInit } from '@angular/core';
import { CinemaService} from '../services/movies.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css'],
  providers: [CinemaService]
})
export class MyMovieComponentComponent implements OnInit {

  movieIdNumber : Number;
  movieDetails : Object;
  

  constructor(private movieServe : CinemaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.movieIdNumber = Number(params['id']));
      this.movieDetails = this.getMovieDetail(this.movieIdNumber)
  }

  getMovieDetail(id){
    return this.movieServe.getMovie(id);
   }

  

}
