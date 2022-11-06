import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogEntry } from 'src/app/interfaces/ContentPublic/blog-entry';
import { BlogService } from 'src/app/services/content/blog.service';
import { SeoService } from 'src/app/services/util/seo.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  entries: BlogEntry[] = []
  entriesHeader: BlogEntry[] = []
  showCharging: boolean = false

  constructor(
    private SEOService: SeoService,
    private blogService: BlogService
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
    this.blogService.list(9, 0).subscribe((response: BlogEntry[]) => {
      if(this.entriesHeader.length == 0) {
        this.entriesHeader[0] = response[0]
        response.shift()
        this.entries = response
      }
      else {
        this.entries.push(...response)
      }
      this.showCharging = false
    })
  }

  getMoreEntries(){
    this.showCharging = true
    setTimeout(() => {this.getListEntries()}, 3000)
  }

}
