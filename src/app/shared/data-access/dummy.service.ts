import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DummyService {
  public dummyObs$ = interval(2000);
}
