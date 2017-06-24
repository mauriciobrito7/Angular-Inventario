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
        ]),
        transition(':leave',[
            animate('0.3s ease-out', style({
                opacity:0,
                transform:'translateX(-100%)'
            }))
        ])
    ]);

export const shrinkOut: AnimationEntryMetadata = [
  trigger('shrinkOut', [
    state('in', style({height: '*'})),
    transition('* => void', [
      style({height: '*'}),
      animate(250, style({height: 0}))
    ])
  ])
]