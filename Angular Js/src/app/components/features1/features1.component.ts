import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-features1',
  templateUrl: 'features1.component.html',
  styleUrls: ['features1.component.css'],
})
export class Features1 {
  @Input()
  feature1ImgAlt: string = 'Artwork showcasing creativity'
  @Input()
  feature3Description: string =
    'Connect with other artists and collaborate on projects'
  @Input()
  feature3Title: string = 'Collaboration Opportunities'
  @Input()
  feature3ImgSrc: string =
    'https://images.unsplash.com/photo-1724709166619-53c3a8621487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2NXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature1ImgSrc: string =
    'https://images.unsplash.com/photo-1701970655370-0d6c1cada73f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2Nnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature2Description: string =
    'Discover new techniques and trends in the art world'
  @Input()
  feature1Title: string = 'Inspiring Artistic Creations'
  @Input()
  feature3ImgAlt: string = 'Artists collaborating on a project'
  @Input()
  feature1Description: string =
    'Explore a diverse range of artistic creations from talented individuals'
  @Input()
  feature2ImgSrc: string =
    'https://images.unsplash.com/photo-1663660653588-57dd5d55d155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDU0MDU2N3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature2ImgAlt: string = 'Artistic tools and materials'
  @Input()
  feature2Title: string = 'Artistic Trends and Techniques'
  activeTab: number = 0
  constructor() {}
}
