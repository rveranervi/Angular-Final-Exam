import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { MovieEntry, MovieRequest } from 'src/app/interfaces/content/movies';
import { MoviesService } from 'src/app/services/content/movies.service';
import { SeoService } from 'src/app/services/util/seo.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [ConfirmationService]
})
export class MoviesComponent implements OnInit {

  entries: MovieEntry[] = []
  showCharging: boolean = false
  showMore: boolean = true
  page: number = 1
  display: boolean = false;
  movieForm = new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(80)]),
    genero: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
    director: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(90)]),
    imagen: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(150)]),
    estreno: new FormControl('',[Validators.required, Validators.min(1900), Validators.max(2023)]),
    duracion: new FormControl('',[Validators.required, Validators.min(15), Validators.max(380)]),
    calificacion: new FormControl(0,[Validators.required, Validators.min(0), Validators.max(10)])
  })

  constructor(
    private SEOService: SeoService,
    private service: MoviesService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.SEOService.updateTitle('Inicio | Sistema de io data perú');
    this.SEOService.updateDescription('Description del sitio para el sistema publicado. Description del sitio para el sistema publicado. Description del sitio para el sistema publicado. ');
    this.SEOService.updateRobot('index, follow')
    this.SEOService.updateKeywords('apps, otros')
    this.SEOService.updateAuthor('IO Data Perú')
    this.SEOService.updatePublisher('IO Data Perú')
    this.SEOService.createCanonicalLink()
    this.getListEntries()
  }

  getListEntries(){
    this.showCharging = true
    let size = 4 
    this.service.list(this.page, size).subscribe((response: MovieEntry[]) => {
      this.page += 1;
      this.entries.push(...response)
      this.showCharging = false
      if(response.length < size){
        this.showMore = false
      }
    }, (error) => {
      console.log("ERROR")
      this.showCharging = false
    })
  }

  getMoreEntries(){
    this.showCharging = true
    setTimeout(() => {this.getListEntries()}, 1000)
  }

  addEntries(){
    this.service.insert(<MovieRequest>{
      nombre: this.movieForm.value.nombre,
      genero: this.movieForm.value.genero,
      director: this.movieForm.value.director,
      imagen: this.movieForm.value.imagen,
      estreno: this.movieForm.value.estreno || 0,
      duracion: this.movieForm.value.duracion || 0,
      calificacion: this.movieForm.value.calificacion || 0
    }).subscribe((response)=>{
      window.location.reload()
    })
  }

  removeEntry(code: number){
    this.confirmationService.confirm({
      message: '¿Seguro de eliminar la pelicula?',
      acceptLabel: 'Si',
      rejectLabel: 'No',
      accept: () => {
        this.service.remove(code).subscribe((response)=>{
          this.entries = this.entries.filter(en => {return en.id != code})
        })
      }
  });
  }

  showDialog() {
    this.display = true;
  }

  save() {
    this.addEntries()
  }
  
}
