import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-newmoment-form',
  templateUrl: './newmoment-form.component.html',
  styleUrls: ['./newmoment-form.component.css'],
})
export class NewmomentFormComponent {
  @Input() btnText!: string;
}
