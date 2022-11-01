import { NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cool-button',
  imports: [NgIf],
  template: `
    <ng-container *ngIf="logChangeDetection()"></ng-container>
    <button (click)="({})">CoolButtonComponent</button>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoolButtonComponent {
  logChangeDetection() {
    console.log('CoolButtonComponent rendered');
    return true;
  }
}
