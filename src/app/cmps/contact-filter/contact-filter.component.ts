import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { ContactFilter } from 'src/app/models/contact.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit, OnDestroy {

  constructor(private contactService: ContactService) { }

  contactFilter!: ContactFilter
  subscription!: Subscription

  ngOnInit() {
    this.subscription = this.contactService.contactFilter$.subscribe(contactFilter => {
      this.contactFilter = contactFilter
    })
  }

  onSetFilter() {
    this.contactService.setFilter({ ...this.contactFilter })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
