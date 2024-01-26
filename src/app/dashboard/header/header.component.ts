import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  fa_icons = {
    "faGithub": faGithub,
    "faLinkedIn": faLinkedin,
    "faGoogle": faGoogle,
    "faLightbulb": faLightbulb
  }

}
