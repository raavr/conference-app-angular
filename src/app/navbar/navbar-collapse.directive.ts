import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[collapseNavbar]'
})
export class CollapseNavbarDirective {
    constructor(private el: ElementRef) {
    }

    @HostListener('click', ['$event.target'])
    onClick(el) {
        jQuery(el).closest("#navbarResponsive").collapse('hide');
    }

}