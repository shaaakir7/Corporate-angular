import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'corporate-con';
  isMenuOpen = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  // onload function for loader
  ngOnInit(): void {
    this.renderer.listen('window', 'load', () => {
      setTimeout(() => {
        this.renderer.setStyle(this.el.nativeElement.querySelector('#loaderWrap'), 'display', 'none');
        this.renderer.setStyle(this.el.nativeElement.querySelector('#pageContent'), 'display', 'block');
        console.log('loaded');
      }, 2500);
    });
  }
}
