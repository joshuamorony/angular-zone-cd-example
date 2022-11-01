import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CoolButtonComponent } from 'src/app/shared/ui/cool-button.component';

@Component({
  selector: 'app-component-two',
  imports: [CoolButtonComponent, NgIf],
  template: `
    <ng-container *ngIf="logChangeDetection()"></ng-container>
    <button (click)="increment()">ComponentTwo</button>
    <p>Component two</p>
    {{ count }}
    <app-cool-button></app-cool-button>
  `,
  standalone: true,
})
export class ComponentTwo {
  public count = 0;

  increment() {
    this.count++;
  }

  logChangeDetection() {
    console.log('ComponentTwo rendered');
    return true;
  }
}
