import { AsyncPipe, NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LetModule, PushModule } from '@rx-angular/template';
import { DummyService } from 'src/app/shared/data-access/dummy.service';
import { CoolButtonComponent } from 'src/app/shared/ui/cool-button.component';

@Component({
  selector: 'app-component-two',
  imports: [CoolButtonComponent, NgIf, AsyncPipe, PushModule, LetModule],
  template: `
    <ng-container *ngIf="dummyService.dummyObs$ | push"> </ng-container>
    <ng-container *rxLet="dummyService.dummyObs$ as val">
      {{ val }}
    </ng-container>
    <ng-container *ngIf="logChangeDetection()"></ng-container>
    <button (click)="({})">ComponentTwo</button>
    <p>Component two</p>
    <app-cool-button></app-cool-button>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentTwo {
  constructor(public dummyService: DummyService) {}

  logChangeDetection() {
    console.log('ComponentTwo rendered');
    return true;
  }
}
