import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-cta',
  templateUrl: 'cta.component.html',
  styleUrls: ['cta.component.css'],
})
export class CTA {
  @Input()
  heading1: string = 'Unleash Your Creativity'
  @Input()
  content1: string =
    'Join our artistry hub and explore a world of endless possibilities.'
  @Input()
  action1: string = 'Get Started'
  constructor() {}
}
