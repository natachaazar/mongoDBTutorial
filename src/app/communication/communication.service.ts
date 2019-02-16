import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CommunicationService {
  private subject = new Subject<any>();

  constructor() {
  }

  reloadTimeline(): void {
    this.subject.next({notifyComponent: 'app-tutorial', action: 'reload-timeline'});
  }

  getData(): Observable<any> {
    return this.subject.asObservable();
  }
}
