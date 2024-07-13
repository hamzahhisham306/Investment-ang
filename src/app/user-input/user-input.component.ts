import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calcuate = new EventEmitter<InvestmentInput>();

  initialValue = '';
  annualValue = '';
  expectedValue = '';
  durationValue = '';

  onSubmit() {
    const data = {
      initialInvestment: +this.initialValue,
      duration: +this.durationValue,
      expectedReturn: +this.expectedValue,
      annualInvestment: +this.annualValue,
    };
    this.calcuate.emit(data);
  }
}
