import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.document.body.setAttribute('class', '')
    this.document.body.classList.add('sb-nav-fixed');
    this.loadStyle('/assets/styles/style-private.css');
  }

  loadStyle(styleName: string) {
    const head = this.document.getElementsByTagName('head')[0];
    let themeLink = this.document.getElementById('client-theme') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = styleName;
    } else {
      const style = this.document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      style.href = `${styleName}`;
      head.appendChild(style);
    }
  }

  sidebarToggle() {
    if(this.document.body.classList.contains('sb-sidenav-toggled')) {
      this.document.body.classList.remove('sb-sidenav-toggled');
    }
    else {
      this.document.body.classList.add('sb-sidenav-toggled');
    }
  }

  getPhoneEnvironment() {
    return environment.phone
  }

  getAppNameEnvironment() {
    return environment.appName
  }

  getCompanyNameEnvironment() {
    return environment.company
  }

  goToSupport() {
    window.open("https://api.whatsapp.com/send?phone=" + this.getPhoneEnvironment())
  }

  logout() {
    localStorage.removeItem('displayName')
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

}
