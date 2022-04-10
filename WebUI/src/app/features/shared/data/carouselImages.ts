import { image } from "../interfaces/image";

const folder = '../../assets/img/carousel/';

export const carouselImages: image[] = [
    {src: folder + 'pt7-large.jpg',
    title: 'Patio',
    description: 'A fine example of one of our most common areas of work',
    active: true,
    home: true},
    {src: folder + 'blockley-finished2.jpg',
    title: 'Dry stone wall',
    description: 'A look at just how stunning dry stone walls can be',
    home: true},
    {src: folder + 'jm8-large.jpg',
    title: 'Wall & Gates',
    description: 'A dry stone wall with bespoke gates in between',
    home: true},
    {src: folder + 'patio5.jpg',
    title: 'Patio',
    description: 'Another example of a perfectly finished patio',
    home: true},
    {src: folder + 'blockley-finished9.jpg',
    title: 'Dry stone wall',
    description: 'Another look at just how beautiful a dry stone wall can be',
    home: true}
]