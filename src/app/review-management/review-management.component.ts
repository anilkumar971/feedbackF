import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { Feedback } from '../../Model/feedback.model';
//import { Feedback } from '../../shared/models/feedback.model';
//import { FeedbackService } from '../../shared/services/feedback.service';

@Component({
  selector: 'app-review-management',
  templateUrl: './review-management.component.html',
  styleUrls: ['./review-management.component.css'],
})
export class ReviewManagementComponent implements OnInit {
  feedbackList: Feedback[] = [];

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.getAllFeedback();
  }

  getAllFeedback(): void {
    this.feedbackService.getAllFeedback().subscribe({
      next: (response) => (this.feedbackList = response),
      error: (err) => console.error(err),
    });
  }

  approveFeedback(id: number): void {
    this.feedbackService.approveFeedback(id).subscribe(() => {
      alert('Feedback approved!');
      this.getAllFeedback();
    });
  }

  deleteFeedback(id: number): void {
    this.feedbackService.deleteFeedback(id).subscribe(() => {
      alert('Feedback deleted!');
      this.getAllFeedback();
    });
  }
}
