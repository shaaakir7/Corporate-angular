import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  images = [
    {
      imgSrc: "assets/blog.webp",
      imgAlt: " error ",
    },
    {
      imgSrc: "assets/chair.png",
      imgAlt: " error ",
    },
    {
      imgSrc: "assets/halff.png",
      imgAlt: " error ",
    },
    {
      imgSrc: "assets/lap.png",
      imgAlt: " error ",
    },
    {
      imgSrc: "assets/mac.png",
      imgAlt: " error ",
    }
  ]
}
