import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormSubmissionService {
  private formSubmittedSubject: BehaviorSubject<boolean>;

  constructor() {
    this.formSubmittedSubject = new BehaviorSubject<boolean>(false);
  }

  getFormSubmittedSubject() {
    return this.formSubmittedSubject;
  }

  setFormSubmitted(value: boolean) {
    this.formSubmittedSubject.next(value);
  }
}
