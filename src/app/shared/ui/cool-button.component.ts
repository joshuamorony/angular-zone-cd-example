import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cool-button',
  imports: [NgIf],
  template: `
    <ng-container *ngIf="logChangeDetection()"></ng-container>
    <button (click)="({})">CoolButtonComponent</button>
  `,
  standalone: true,
})
export class CoolButtonComponent {
  logChangeDetection() {
    console.log('CoolButtonComponent rendered');
    return true;
  }
}
