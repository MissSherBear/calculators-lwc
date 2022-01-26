import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
    @track firstNumber;
    @track secondNumber;
    resultValue;

    onNumberOneChange (event) {
        this.firstNumber = parseInt(event.target.value);
    }
    onNumberTwoChange (event) {
        this.secondNumber = parseInt(event.target.value);
    }
    doSum() {
        this.resultValue = parseInt(this.firstNumber) + parseInt(this.secondNumber);
    }
    doSubt() {
        this.resultValue = this.firstNumber - this.secondNumber;
    }
    doDiv() {
        this.resultValue = this.firstNumber / this.secondNumber;
    }
    doMulti() {
        this.resultValue = this.firstNumber * this.secondNumber;
    }
}