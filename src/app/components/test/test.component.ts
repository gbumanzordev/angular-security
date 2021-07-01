import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  @ViewChild('image') image!: ElementRef<HTMLImageElement>;
  @ViewChild('link') anchor!: ElementRef<HTMLAnchorElement>;

  constructor(private renderer: Renderer2) {}

  changeDomStuff(): void {
    const imageElement = this.image.nativeElement;
    const anchorEl = this.anchor.nativeElement;

    this.renderer.setAttribute(
      imageElement,
      'src',
      'https://picsum.photos/600'
    );

    this.renderer.setStyle(anchorEl, 'color', 'red');
    this.renderer.appendChild(
      anchorEl,
      this.renderer.createText(' as requested by Marvin')
    );
  }
}
