import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component-one',
  imports: [NgIf],
  template: `
    <ng-container *ngIf="logChangeDetection()"></ng-container>
    <button (click)="({})">ComponentOne</button>
    <p>Component one</p>
  `,
  standalone: true,
})
export class ComponentOne {
  logChangeDetection() {
    console.log('ComponentOne rendered');
    return true;
  }
}
