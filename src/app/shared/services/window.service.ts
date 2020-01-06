import { Router, NavigationEnd } from '@angular/router';
import { PLATFORM_ID, Inject, Injectable, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class WindowService {

    constructor(
        @Inject(PLATFORM_ID) private platformId: any,
        private router: Router
    ) { }

    scrollTop(smooth?: boolean) {
        if (smooth != null && smooth === true) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        } else {
            window.scrollTo({top: 0, behavior: 'auto'});
        }
    }

    scrollTo(element: ElementRef) {
        try {
            element.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } catch (err) {
            
        }
    }
}
