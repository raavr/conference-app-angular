import { Component } from '@angular/core';
import { PartnerGroup } from '../partner/partner-group';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'partner-list',
  styleUrls: ['./partner-list.component.scss'],
  templateUrl: './partner-list.component.html'
})
export class PartnerListComponent {
  partnersGroups: PartnerGroup[];

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { partners: PartnerGroup[] }) => (
        this.partnersGroups = data.partners
      ));
  }
}
