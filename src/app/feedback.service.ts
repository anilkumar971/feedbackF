import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../Model/feedback.model';
//nimport { Feedback } from '../models/feedback.model';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private baseUrl = 'http://localhost:8083/api';

  constructor(private http: HttpClient) {}

  submitFeedback(feedback: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>(`${this.baseUrl}/feedback`, feedback);
  }

  getApprovedFeedback(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.baseUrl}/feedback`);
  }

  getAllFeedback(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.baseUrl}/admin/feedback`);
  }

  approveFeedback(id: number): Observable<Feedback> {
    return this.http.put<Feedback>(`${this.baseUrl}/admin/feedback/${id}/approve`, {});
  }

  deleteFeedback(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/admin/feedback/${id}`);
  }
}
