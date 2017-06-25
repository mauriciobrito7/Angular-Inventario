import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
    selector:'[myBackground]'
})
export class BackgroundDirective{
    /*
        Colocamos el método de acceso para hacer referencia que el atributo pertenece a la clase
    */
    constructor(private el: ElementRef) { }

    @Input('myHighlight') highlightColor: string;

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor || 'red');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}