import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestPageComponent } from './test-page/test-page.component';

@Component({
  imports: [TestPageComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'toastr-aria-test';
}
