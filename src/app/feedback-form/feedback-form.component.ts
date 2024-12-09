import { Component } from '@angular/core';
import { Feedback } from '../../Model/feedback.model';
import { FeedbackService } from '../feedback.service';
//import { Feedback } from '../../shared/models/feedback.model';
//import { FeedbackService } from '../../shared/services/feedback.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css'],
})
export class FeedbackFormComponent {
  feedback: Feedback = {
    userName: '',
    comments: '',
    rating: 0,
  };

  constructor(private feedbackService: FeedbackService) {}

  submitFeedback(): void {
    this.feedbackService.submitFeedback(this.feedback).subscribe({
      next: (response) => {
        alert('Feedback submitted successfully!');
        this.feedback = { userName: '', comments: '', rating: 0 };
      },
      error: (err) => console.error(err),
    });
  }
}
