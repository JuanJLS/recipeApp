import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    //To close the dropdown by clicking in the drowpdown menu
    // @HostListener('click') toggleOpen(){
    //     this.isOpen = !this.isOpen;
    // }

    //To close the dropdown by clicking anywhere in the page and not only in the dropdown
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

    constructor(private elRef: ElementRef) {}
}