import{ animate, state, style, transition, trigger, keyframes } from '@angular/animations';
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
export const scale: AnimationEntryMetadata = 
    trigger('routeAnimationItem',[
        state('*',
            style({
                opacity:1,
                transform:'scale(1)'
            })
        ),
        transition('void =>*',animate(300, keyframes([
            style({'transform': 'scale(0)'}),
            style({opacity:0}),
            style({'transform': 'scale(.4)'}),
            style({opacity:0.5}),
            style({'transform': 'scale(.8)'}),
            style({opacity:0.9}),
            style({'transform': 'scale(1)'})
        ])))
    ]);
export const toggle: AnimationEntryMetadata = 
    trigger('toggleAnimation',[
        state('*',
            style({
                opacity:1,
                transform:'translateY(100%)'
            })
        ),
        transition('void =>*',animate(200, keyframes([
            style({'transform': 'translateY(-100%)'}),
            style({'transform': 'translateY(-80%)'}),
            style({'transform': 'translateY(-40%)'}),
            style({'transform': 'translateY(100%)'})
        ])))
    ]);