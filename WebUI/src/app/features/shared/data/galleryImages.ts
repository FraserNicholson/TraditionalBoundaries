import { image } from "../interfaces/image";

const folder = '../../assets/img/';

export const galleryImages: image[][] = [
    [{src: folder + 'blueLake.jpg',
    title: 'Blue Lake',
    description: 'This is my new blue lake',
    active: true},
    {src: folder + 'mountainLake.jpg',
    title: 'New Blue Lake',
    description: 'description'}],
    [{src: folder +  'montStMichel.jpg',
    title: 'Mont St Michel',
    description: 'I\'ve been to Mont St Michel, it was lovely. I would highly recomend going',
    active: true}],
    [{src: folder + 'northernLights.jpg',
    title: 'Northern Lights',
    description: 'These are the northern lights',
    active: true}],    
    [{src: folder + 'starySky.jpg',
    title: 'My star aka Lottie',
    description: 'I love lottie with my whole heart',
    active: true}],
    [{src: folder + 'mountainLake.jpg',
    title: 'Mountain Lake',
    description: 'This is my mountain lake',
    active: true}]
]