import { image } from "../interfaces/image";

const folder = '../../assets/img/gallery/';

export const galleryImages: image[][] = [
    [{src: folder + 'jm8-large.jpg',
    title: 'Bespoke gate',
    description: 'Here is our bespoke gate example, here our customer has chosen a black gate, but we have since'
    + 'done a similar project with a brown wooden gate instead which was equally as pleasing to look at.'
    + 'As you can see from the different stages of our work, we really had to ensure that the gate was perfectly'
    + ' aligned, and we hope that you would agree that the end result is fantastic.',
    active: true},
    {src: folder + 'jm-gate-started1.jpg',
    title: 'Bespoke gate'},
    {src: folder + 'jm-gate-unfinished1.jpg',
    title: 'Bespoke gate'},
    {src: folder + 'jm-gate-unfinished2.jpg',
    title: 'Bespoke gate'},
    {src: folder + 'jm-gate-almost-finished.jpg',
    title: 'Bespoke gate'}],

    [{src: folder +  'patio8.jpg',
    title: 'Patio',
    description: 'I\'ve been to Mont St Michel, it was lovely. I would highly recommend going',
    active: true},
    {src: folder + 'patio-unfinished1.jpg'},
    {src: folder + 'patio-unfinished.jpg'},
    {src: folder + 'patio3.jpg'}],

    [{src: folder + 'blockley-finished10.jpg',
    title: 'Dry stone wall',
    description: 'These are the northern lights',
    active: true},
    {src: folder + 'blockley-started1.jpg'},
    {src: folder + 'blockley-unfinished1.jpg'},
    {src: folder + 'blockley-unfinished2.jpg'},
    {src: folder + 'blockley-finished1.jpg'},
    {src: folder + 'blockley-finished2.jpg'},
    {src: folder + 'blockley-finished3.jpg'},
    {src: folder + 'blockley-finished5.jpg'},
    {src: folder + 'blockley-finished6.jpg'},
    {src: folder + 'blockley-finished8.jpg'},
    {src: folder + 'blockley-finished9.jpg'}],

    [{src: folder + 'pt7-large.jpg',
    title: 'Patio',
    description: 'These are the northern lights',
    active: true},
    {src: folder + 'jm-patio-unfinished1.jpg'},
    {src: folder + 'pt1-large.jpg'}]
]