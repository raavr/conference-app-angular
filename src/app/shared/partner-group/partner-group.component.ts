import { Component, Input } from '@angular/core';
import { PartnerGroup } from '../../partners/partner/partner-group';

@Component({
  selector: 'partner-group',
  styleUrls: ['./partner-group.component.scss'],
  templateUrl: './partner-group.component.html'
})
export class PartnerGroupComponent {
  @Input() partnerGroup: PartnerGroup;
}
