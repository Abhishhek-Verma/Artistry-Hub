import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-testimonial',
  templateUrl: 'testimonial.component.html',
  styleUrls: ['testimonial.component.css'],
})
export class Testimonial {
  @Input()
  author2Position: string = 'Painter'
  @Input()
  author1Position: string = 'Graphic Designer'
  @Input()
  author3Alt: string = 'Image of Emily Chen'
  @Input()
  author1Name: string = 'Samantha Smith'
  @Input()
  author1Src: string =
    'https://images.unsplash.com/photo-1541525897844-9851970da95a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2NXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author3Name: string = 'Emily Chen'
  @Input()
  review2: string =
    'As a painter, I was looking for a place to share my passion for art. Artistry Hub not only allows me to exhibit my paintings but also provides a space for inspiration and collaboration with other artists.'
  @Input()
  author2Name: string = 'Michael Johnson'
  @Input()
  author4Position: string = 'Illustrator'
  @Input()
  author4Name: string = 'David Rodriguez'
  @Input()
  author4Src: string =
    'https://images.unsplash.com/photo-1690040337678-e868ce9a6748?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2NXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author1Alt: string = 'Image of Samantha Smith'
  @Input()
  author2Src: string =
    'https://images.unsplash.com/photo-1520223297779-95bbd1ea79b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2Nnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author3Src: string =
    'https://images.unsplash.com/photo-1503443062224-9f77d743cf25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2Nnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author2Alt: string = 'Image of Michael Johnson'
  @Input()
  author4Alt: string = 'Image of David Rodriguez'
  @Input()
  content1: string =
    'I have found a supportive community of fellow artists on Artistry Hub. The platform has helped me showcase my work and connect with potential clients.'
  @Input()
  author3Position: string = 'Photographer'
  @Input()
  review1: string =
    "Artistry Hub has been a game-changer for me. I've received valuable feedback on my artwork and even landed a few commissions through the platform."
  @Input()
  heading1: string = 'Testimonials'
  @Input()
  review3: string =
    "Artistry Hub has given me the exposure I needed as a photographer. The community is vibrant, and I've had the opportunity to participate in various exhibitions and projects."
  @Input()
  review4: string =
    "I can't thank Artistry Hub enough for the support and encouragement I've received here. It's a fantastic platform for artists to grow, learn, and showcase their talents."
  constructor() {}
}
