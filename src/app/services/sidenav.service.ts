import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  public isOpen = new BehaviorSubject<boolean>(false);
  isOpen$ = this.isOpen.asObservable();

  private content = new BehaviorSubject<string>('');
  content$ = this.content.asObservable();

  toggle() {
    this.isOpen.next(!this.isOpen.value);
  }

  open() {
    this.isOpen.next(true);
  }
  close() {
    this.isOpen.next(false);
  }

  setContent(content: any) {
    this.content.next(content);
  }
}
