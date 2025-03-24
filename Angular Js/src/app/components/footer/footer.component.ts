import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class Footer {
  @Input()
  column2Title: string = 'Connect'
  @Input()
  link7: string = 'Facebook'
  @Input()
  link5: string = 'Privacy Policy'
  @Input()
  link8: string = 'Instagram'
  @Input()
  action1: string = 'Subscribe'
  @Input()
  content3: string = '© 2024 TeleportHQ'
  @Input()
  link4: string = 'Terms of Service'
  @Input()
  logoSrc: string =
    'https://presentation-website-assets.teleporthq.io/logos/logo.png'
  @Input()
  cookiesLink: string = '/cookies'
  @Input()
  content2: string =
    'By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.'
  @Input()
  link9: string = 'Twitter'
  @Input()
  link6: string = 'Cookie Policy'
  @Input()
  logoAlt: string = 'Artistry Hub Logo'
  @Input()
  link1: string = 'About Us'
  @Input()
  privacyLink: string = '/privacy'
  @Input()
  link10: string = 'LinkedIn'
  @Input()
  column1Title: string = 'Explore'
  @Input()
  termsLink: string = '/terms'
  @Input()
  link3: string = 'FAQs'
  @Input()
  link2: string = 'Contact Us'
  @Input()
  socialLinkTitleCategory: string = 'Follow Us'
  constructor() {}
}
