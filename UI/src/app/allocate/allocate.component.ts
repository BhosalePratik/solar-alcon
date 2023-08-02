import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-allocate',
  templateUrl: './allocate.component.html',
  styleUrls: ['./allocate.component.css']
})
export class AllocateComponent implements OnInit {

  allocateForm: FormGroup;
  errorMsg: string;
  successMsg: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.allocateForm = this.fb.group({
      distributorName: ["", Validators.required],
      purchaseDate: ["", Validators.required],
      installationDate: ["", Validators.required],
      customerId: ["", Validators.required],
    });
  }

  register() {
    this.errorMsg = this.successMsg = "";
    
  }

}
