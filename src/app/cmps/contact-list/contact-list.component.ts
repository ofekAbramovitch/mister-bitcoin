import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {

    constructor(private contactService: ContactService) {}

    @Input() contacts!: Contact[] | null

    onRemove(contactId: string | undefined) {
      try{
        this.contactService.deleteContact(contactId as string)
      } catch(err){
        console.log(err)
      }
    }
}
