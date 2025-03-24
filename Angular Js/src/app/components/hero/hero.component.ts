import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html',
  styleUrls: ['hero.component.css'],
})
export class Hero {
  @Input()
  image3Src: string =
    'https://images.unsplash.com/photo-1639968685023-22db974d0b2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2NXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image8Alt: string = 'Art workshop'
  @Input()
  image2Src: string =
    'https://images.unsplash.com/photo-1649976107060-1772de64a55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2Nnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image6Alt: string = 'Handcrafted jewelry'
  @Input()
  image11Src: string =
    'https://images.unsplash.com/photo-1646724684583-764bb3f47c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2N3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image5Alt: string = 'Digital art creation'
  @Input()
  image1Alt: string = 'Artistic painting'
  @Input()
  image7Src: string =
    'https://images.unsplash.com/photo-1628697550216-c4b824f3e22c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2OHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image7Alt: string = 'Art supplies'
  @Input()
  image12Alt: string = 'Artistic tools'
  @Input()
  image2Alt: string = 'Sculpture artwork'
  @Input()
  image6Src: string =
    'https://images.unsplash.com/photo-1676496220303-3d98c6077710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2OHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image12Src: string =
    'https://images.unsplash.com/photo-1649899996753-9fc737c99ca5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2OXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image3Alt: string = 'Abstract art piece'
  @Input()
  image9Src: string =
    'https://images.unsplash.com/photo-1712843703345-cfaa1c68d157?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2OXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image11Alt: string = 'Artistic community event'
  @Input()
  action2: string = 'Learn More'
  @Input()
  action1: string = 'Explore Artworks'
  @Input()
  image8Src: string =
    'https://images.unsplash.com/photo-1605008584735-f0ae2bec5a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2OXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image5Src: string =
    'https://images.unsplash.com/photo-1676496220303-3d98c6077710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU3MHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image4Src: string =
    'https://images.unsplash.com/photo-1727124442484-0f0aa8366046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU3MHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image10Alt: string = 'Creative studio space'
  @Input()
  image4Alt: string = 'Photography collection'
  @Input()
  heading1: string = 'Unleash Your Creativity with Artistry Hub'
  @Input()
  content1: string =
    'Discover a world of artistic inspiration and creativity at Artistry Hub. Explore a diverse range of artworks, connect with talented artists, and find the perfect piece to enhance your space.'
  @Input()
  image10Src: string =
    'https://images.unsplash.com/photo-1547146680-006a0ef94b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU3MHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image9Alt: string = 'Art gallery exhibition'
  @Input()
  image1Src: string =
    'https://images.unsplash.com/photo-1561138328-cb6032563277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU3MXw&ixlib=rb-4.0.3&q=80&w=1080'
  constructor() {}
}
