import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appPassportNumber]'
})
export class PassportNumberDirective {

  constructor() {}

  @HostBinding('style.border') border: string;
  @HostBinding('style.color') color: string;

  @HostListener('input', ['$event']) onInput(event: InputEvent){
    
    const input = event.target as HTMLInputElement;
    this.border = '';
    this.color = '';

    if(input.value === ''){
      this.border = '';
      this.color = '';
    }

    let rePattern: RegExp = /^[A][0-9]{8}$/;
    console.log(rePattern.test(input.value.toUpperCase()));
    
    if(!rePattern.test(input.value.toUpperCase())){
      this.border = '2px solid red';
      this.color = 'red';
    }else{
      this.border = '1px solid black';
      this.color = 'green';
    }

  } 
}