import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-apply ',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {

  loanForm!: FormGroup 
  
  constructor(public dialog: MatDialog) { }

  ngOnInit():void {   this.loanForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    loanAmount: new FormControl('', [Validators.required, Validators.min(1000)]),
    loanTerm: new FormControl('', [Validators.required, Validators.min(12)]),
  });

}

submitForm() {
throw new Error('Method not implemented.');
}

openPopup() {
  const dialogRef = this.dialog.open(PopUpComponent);

  dialogRef.afterClosed().subscribe((result: any) => {
    console.log(`Dialog result: ${result}`);
  });
}
}
