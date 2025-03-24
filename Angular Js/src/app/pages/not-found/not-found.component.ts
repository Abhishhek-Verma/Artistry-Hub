import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'not-found1',
  templateUrl: 'not-found.component.html',
  styleUrls: ['not-found.component.css'],
})
export class NotFound1 {
  constructor(private title: Title) {
    this.title.setTitle('Spotless Hungry Crocodile')
  }
}
