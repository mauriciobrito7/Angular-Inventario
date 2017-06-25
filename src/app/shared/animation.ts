import{ animate, state, style, transition, trigger } from '@angular/animations';
import { AnimationEntryMetadata } from '@angular/core';

export const slide: AnimationEntryMetadata = 
    trigger('routeAnimation',[
        state('*',
            style({
                opacity:1,
                transform:'translateX(0)'
            })
        ),
        transition(':enter',[
            style({
                opacity:1,
                transform:'translateX(100%)'
            }),
            animate('0.3s ease-in')
        ])
    ]);