import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personalloan',
  templateUrl: './personalloan.component.html',
  styleUrls: ['./personalloan.component.scss']
})
export class PersonalloanComponent implements OnInit {

  interestRate!: number;
  loanTenure!: number;
  emi!: number;
  loanAmount!:number;

  constructor(private Router:Router) { }

  ngOnInit(): void {
  }
  calculateEmi() {
    const r = this.interestRate / (12 * 100);
    const n = this.loanTenure * 12;
    this.emi = (this.loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}
apply(){
  this.Router.navigate(['/apply']);
}


}
