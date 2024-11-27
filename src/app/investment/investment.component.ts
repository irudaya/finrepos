import { Component } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-investment',
  imports: [ReactiveFormsModule],
  templateUrl: './investment.component.html',
  styleUrl: './investment.component.css'
})
export class InvestmentComponent {
  investmentForm: FormGroup;
  isReview = false;

  constructor(private fb: FormBuilder) {
    this.investmentForm = this.fb.group({
      assetType: ['', Validators.required],
      quantity: [null, [Validators.required, Validators.min(1)]],
      purchasePrice: [null, [Validators.required, Validators.min(1)]],
      purchaseDate: ['', Validators.required],
    });
  }

  reviewDetails() {
    this.isReview = true;
  }

  onSubmit() {
    if (this.investmentForm.valid) {
      console.log('Form Submitted', this.investmentForm.value);
      alert('Form submitted successfully!');
      this.investmentForm.reset();
      this.isReview = false;
    }
  }
}
