import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(DOCUMENT) private dom: any,
    private titleSvc: Title,
    private metaSvc: Meta,
  ) { }

  updateTitle(title: string){
    this.titleSvc.setTitle(title)
  }

  updateDescription(content: string) {
    this.metaSvc.updateTag({ name: 'description', content })
  }

  updateRobot(content: string) {
    this.metaSvc.updateTag({ name: 'robots', content })
  }

  updateKeywords(content: string) {
    this.metaSvc.updateTag({ name: 'keywords', content })
  }

  updateAuthor(content: string) {
    this.metaSvc.updateTag({ name: 'keywords', content })
  }

  updatePublisher(content: string) {
    this.metaSvc.updateTag({ name: 'keywords', content })
  }

  createCanonicalLink(url?: string) {
    let link: HTMLLinkElement =
      this.dom.createElement('link');

    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url ? url : this.document.location.href);
    this.dom.head.appendChild(link);
  }

}