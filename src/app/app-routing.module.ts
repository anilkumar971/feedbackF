import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { ReviewManagementComponent } from './review-management/review-management.component';
//import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
//import { ReviewManagementComponent } from './admin/review-management/review-management.component';

const routes: Routes = [
  { path: '', redirectTo: 'feedback', pathMatch: 'full' },
  { path: 'feedback', component: FeedbackFormComponent },
  { path: 'admin/reviews', component: ReviewManagementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
