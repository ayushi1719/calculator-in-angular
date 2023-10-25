import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  constructor() {}

  inp: string = '';
  inps;

  ngOnInit() {}

  takeInput(val) {
    console.log(val);

    this.inp += val;
    console.log(this.inp);
  }

  equalTo() {
    this.inps = this.inp.match(/[^+-/*]+|[+-/*]/g);
    // console.log(this.inps);

    const op1 = parseInt(this.inps[0]);
    const op2 = parseInt(this.inps[2]);

    const op = this.inps[1];

    console.log('operands', op1, op2, op);

    let out;

    switch (op) {
      case '+':
        out = op1 + op2;
        break;
      case '-':
        out = op1 - op2;
        break;
      case '*':
        out = op1 * op2;
        break;
      case '/':
        out = op1 / op2;
        if (op2 == 0) window.alert('denominator is 0');
        break;
    }

    // console.log('output', out);

    this.inp = out;
    // console.log('dis output', this.inp);
  }

  allClear() {
    this.inp = '';
  }
}
