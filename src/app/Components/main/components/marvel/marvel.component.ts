import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {
  personajes: any[] = [];
  constructor(private service: MarvelService) {
    this.service.apiMarvel().subscribe( (data: any) => {
      this.personajes = data.data.results;
    });
  }

  ngOnInit(): void {
  }

}
