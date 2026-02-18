import { Component } from '@angular/core';
import { Toast } from 'ngx-toastr';

@Component({
  selector: 'app-custom-toast',
  templateUrl: './custom-toast.component.html',
})
export class CustomToastComponent extends Toast {}
