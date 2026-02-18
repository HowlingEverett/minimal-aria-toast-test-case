import { Component, inject, OnInit, viewChild } from '@angular/core';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { CustomToastComponent } from './custom-toast.component';

@Component({
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.css',
  selector: 'app-test-page',
  imports: [ToastContainerDirective],
})
export class TestPageComponent implements OnInit {
  toastContainer = viewChild.required(ToastContainerDirective);
  toastrService = inject(ToastrService);

  ngOnInit(): void {
    this.toastrService.overlayContainer = this.toastContainer();
  }

  displayToast() {
    this.toastrService.success(
      'I am some text that should be read aloud, in a polite fashion, by VoiceOver.',
      'Title',
      { toastComponent: CustomToastComponent },
    );
  }
}
