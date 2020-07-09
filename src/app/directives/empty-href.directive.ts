import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appEmptyHref]'
})
export class EmptyHrefDirective {

    @Input() href:string;

    @HostListener("click", ['$event'])
    preventRedirect(event: MouseEvent){
        if(this.href === "#" || !this.href.length){
            event.preventDefault();
        }
    }

}
