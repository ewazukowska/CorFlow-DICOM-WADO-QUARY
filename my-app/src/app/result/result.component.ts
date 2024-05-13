import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  images = [
    { src: 'path_to_image1.jpg', title: 'Image 1', description: 'Description of image 1' },
    { src: 'path_to_image1.jpg', title: 'Image 2', description: 'Description of image 2' },
    // Jak dodać obrazy tu???
  ];
  currentIndex = 0;

  prevSlide() {
    this.currentIndex = (this.currentIndex === 0) ? (this.images.length - 1) : (this.currentIndex - 1);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : (this.currentIndex + 1);
  }
}
