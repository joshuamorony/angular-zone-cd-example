import { NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-component-one',
  imports: [NgIf],
  template: `
    <ng-container *ngIf="logChangeDetection()"></ng-container>
    <button (click)="({})">ComponentOne</button>
    <p>Component one</p>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentOne {
  logChangeDetection() {
    console.log('ComponentOne rendered');
    return true;
  }
}
