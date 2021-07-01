import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-prevent-xss',
  templateUrl: './prevent-xss.component.html',
  styleUrls: ['./prevent-xss.component.scss'],
})
export class PreventXssComponent {
  inputValue = '';
  imageSource!: string;

  constructor(private domSanitizer: DomSanitizer) {}

  get sanitizedValue(): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(this.inputValue);
  }
}
