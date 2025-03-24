import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-features2',
  templateUrl: 'features2.component.html',
  styleUrls: ['features2.component.css'],
})
export class Features2 {
  @Input()
  feature3Description: string =
    'Access a wide range of resources including tutorials, articles, and tools to support your artistic journey.'
  @Input()
  feature1ImgAlt: string = 'Creative Community Image'
  @Input()
  feature1Description: string =
    'Join a vibrant community of artists and art enthusiasts from around the world.'
  @Input()
  feature3ImgAlt: string = 'Artistic Resources Image'
  @Input()
  feature2Title: string = 'Inspiring Workshops'
  @Input()
  feature1Title: string = 'Creative Community'
  @Input()
  feature1ImgSrc: string =
    'https://images.unsplash.com/photo-1462918037964-9787eafeef63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2Nnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature3ImgSrc: string =
    'https://images.unsplash.com/photo-1727124442484-0f0aa8366046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2N3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature2Description: string =
    'Participate in workshops led by renowned artists to enhance your skills and creativity.'
  @Input()
  feature3Title: string = 'Artistic Resources'
  @Input()
  feature2ImgAlt: string = 'Inspiring Workshops Image'
  @Input()
  feature2ImgSrc: string =
    'https://images.unsplash.com/photo-1649980243305-1de1ce38dc40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2OHw&ixlib=rb-4.0.3&q=80&w=1080'
  activeTab: number = 0
  constructor() {}
}
