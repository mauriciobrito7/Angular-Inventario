import{ animate, state, style, transition, trigger } from '@angular/animations';
import { AnimationEntryMetadata } from '@angular/core';

export const slide: AnimationEntryMetadata = 
    trigger('routeAnimation',[
        state('*',
            style({
                opacity:1,
                Transform:'translateX(0)'
            })
        ),
        transition(':enter',[
            style({
                opacity:1,
                transform:'trnaslateX(100%)'
            }),
            animate('0.3s ease-in')
        ]),
        transition(':leave',[
            animate('0.3s ease-out', style({
                opacity:0,
                transform:'translateX(-100%)'
            }))
        ])
    ]);