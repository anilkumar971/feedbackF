import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { ReviewManagementComponent } from './review-management/review-management.component';
//import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
//import { ReviewManagementComponent } from './admin/review-management/review-management.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackFormComponent,
    ReviewManagementComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
