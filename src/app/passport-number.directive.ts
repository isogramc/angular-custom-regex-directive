import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appPassportNumber]'
})
export class PassportNumberDirective {

  constructor() {}

  @HostBinding('style.border') border: string;

  @HostListener('input', ['$event']) onKeyDown(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    let trimmed = input.value.replace(/\s+/g, '');
    if(trimmed.length > 9){
      trimmed = trimmed.substr(0, 9);
    }

    this.border = '';
    
    if(trimmed.charAt(0)!=='A'&& (/[^\d]+/.test(trimmed.substring(1, trimmed.length)))){
      this.border = '1px solid red';
    }


  } 
}