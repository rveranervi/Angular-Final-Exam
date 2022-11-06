import { Component, OnInit } from '@angular/core';
import { TrainingEntry } from 'src/app/interfaces/ContentPublic/training-entry';
import { TrainingService } from 'src/app/services/content/training.service';
import { SeoService } from 'src/app/services/util/seo.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  entries: TrainingEntry[] = []
  entriesHeader: TrainingEntry[] = []

  constructor(
    private SEOService: SeoService,
    private trainingService: TrainingService
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
    this.trainingService.list(9, 0).subscribe((response: TrainingEntry[]) => {
      if(this.entriesHeader.length == 0) {
        this.entriesHeader[0] = response[0]
        response.shift()
        this.entries = response
      }
    })
  }

  openVideo(video: string){
    window.open(video)
    console.log(video)
  }

}
