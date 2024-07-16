import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@admag/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
