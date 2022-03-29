import { image } from "../interfaces/image";

const folder = '../../assets/img/carousel/';

export const carouselImages: image[] = [
    {src: folder + 'pt7-large.jpg',
    title: 'Patio',
    description: 'Patio description',
    active: true,
    home: true},
    {src: folder +  'jm9-large.jpg',
    title: 'Bespoke gates',
    description: 'Bespoke gates within a dry stone wall',
    home: true},
    {src: folder + 'jm8-large.jpg',
    title: 'Wall & Gates',
    description: 'A dry stone wall with gates in between',
    home: true},
    {src: folder + 'cw2-large.jpg',
    title: 'Wall',
    description: 'Wall description',
    home: true},
    {src: folder + 'lw8-large.jpg',
    title: 'Snowy wall',
    description: 'Description',
    home: true}
]