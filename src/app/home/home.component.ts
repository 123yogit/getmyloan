import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  interestRate!: number;
  loanTenure!: number;
  emi!: number;
  loanAmount!:number;

  name:any;
  lastname:any;
  mobileno:any;

  constructor() { }

  ngOnInit(): void {
  }
  calculateEmi() {
    const r = this.interestRate / (12 * 100);
    const n = this.loanTenure * 12;
    this.emi = (this.loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}
}
