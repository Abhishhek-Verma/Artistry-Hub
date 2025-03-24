import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-steps',
  templateUrl: 'steps.component.html',
  styleUrls: ['steps.component.css'],
})
export class Steps {
  @Input()
  step1Description: string =
    'Sign up for free and create your personal account to access all the features of our artistry hub.'
  @Input()
  step3Description: string =
    'Engage with talented artists from around the world, follow their work, and build a network within the art community.'
  @Input()
  step2Title: string = 'Explore Art Categories'
  @Input()
  step2Description: string =
    'Discover a wide range of art categories including painting, sculpture, photography, and more to find inspiration.'
  @Input()
  step1Title: string = 'Create Your Account'
  @Input()
  step3Title: string = 'Connect with Artists'
  @Input()
  step4Description: string =
    'Share your own creations with a global audience, receive feedback, and grow as an artist on our platform.'
  @Input()
  step4Title: string = 'Showcase Your Artwork'
  constructor() {}
}
