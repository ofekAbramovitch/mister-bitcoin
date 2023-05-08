import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { Move, User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  user!: User
  moves!: Move[]
  contact!: Contact
  subscription!: Subscription

    ngOnInit(): void {
      this.subscription = this.route.data.subscribe(data => {
        this.contact = data['contact']
      })
      this.updateMoves()
    }

    updateMoves() {
      this.user = this.userService.getUser()
      this.moves = this.user.moves.filter(move => move.toId === this.contact._id) 
    }

    onBack() {
      this.router.navigateByUrl('/contact')
    }

    ngOnDestroy(): void {
      this.subscription.unsubscribe()
    }
}
