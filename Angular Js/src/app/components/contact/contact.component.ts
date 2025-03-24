import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css'],
})
export class Contact {
  @Input()
  content2: string =
    'You can also fill out the form below to send us a message:'
  @Input()
  email1: string = 'info@artistryhub.com'
  @Input()
  address1: string = '123 Art Street, Art City, USA'
  @Input()
  content3: string = 'We will get back to you as soon as possible.'
  @Input()
  content1: string =
    "We'd love to hear from you. Reach out to us for any inquiries or feedback."
  @Input()
  content4: string =
    'Follow us on social media for more updates and inspiration.'
  @Input()
  heading1: string = 'Contact Us'
  @Input()
  content5: string = 'Connect with us:'
  @Input()
  phone1: string = '+1-123-456-7890'
  constructor() {}
}
