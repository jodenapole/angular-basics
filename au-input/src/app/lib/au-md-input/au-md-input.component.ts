import { Component, ContentChild, Input, OnInit, AfterContentInit, HostBinding, ViewEncapsulation } from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  selector: 'au-md-input',
  templateUrl: './au-md-input.component.html',
  styleUrls: ['./au-md-input.component.css']
})
export class AuMdInputComponent implements AfterContentInit {

  @Input()
  icon:string;

  @ContentChild(InputRefDirective, {static:false})
  input: InputRefDirective;

  ngAfterContentInit() {
    if(!this.input){
      console.error('the component is not initialized correctly.')
    }
  }

  @HostBinding('class.input-focus')
    get isInputFocus(){
      return this.input ? this.input.focus : false
    }

  // get classes(){
  //   const cssClasses = {};

  //   if (this.icon) {
  //     cssClasses['fa-' + this.icon] = true;
  //   }

  //   return cssClasses;
  // }

}
