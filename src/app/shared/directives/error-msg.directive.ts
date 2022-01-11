import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>;

  private _color = 'red';
  @Input() set color( valor: string ){
    this._color = valor;
    this.setColor();
  }

  private _msg = 'Este campo es requerido';
  @Input() set msg( valor: string ){
    if(valor !== ''){
      this._msg = valor
      this.setMsg();
    }
  }

  @Input() set valido( valor: boolean ){
    (valor) ? this.htmlElement.nativeElement.classList.add('hidden') : this.htmlElement.nativeElement.classList.remove('hidden');
  }

  constructor(private el: ElementRef<HTMLElement>) { 
    this.htmlElement = el;
  }

  ngOnInit(): void {
      this.setEstilo();
      this.setColor();
      this.setMsg();
  }

  setEstilo(): void{
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setMsg(){
    this.htmlElement.nativeElement.innerText = this._msg;
  }

  setColor(){
    this.htmlElement.nativeElement.style.color = this._color;
  }
}
