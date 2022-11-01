import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentOne } from './ui/component-one.component';
import { ComponentTwo } from './ui/component-two.component';

@Component({
  selector: 'app-home',
  template: `
    <ng-container *ngIf="logChangeDetection()"></ng-container>
    <button (click)="({})">HomeComponent</button>
    <h2>Home page</h2>
    <app-component-one></app-component-one>
    <app-component-two></app-component-two>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  logChangeDetection() {
    console.log('HomeComponent rendered');
    return true;
  }
}

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ComponentOne,
    ComponentTwo,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
  ],
})
export class HomeComponentModule {}
