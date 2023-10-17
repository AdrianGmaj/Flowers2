import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Newsletter } from 'src/app/services/newsletter/dto/newsletter';
import { NewsletterService } from 'src/app/services/newsletter/newsletter.service';

@Component({
  selector: 'app-newsletters',
  templateUrl: './newsletters.component.html',
  styleUrls: ['./newsletters.component.scss']
})
export class NewslettersComponent implements OnInit {
  newsletter$: Observable<Array<Newsletter>>;

  displayedColumns: string[] = [
    'id',
    'email',
    'active',
    'created',
   
  ];
  constructor(private newsletterService: NewsletterService) { }

  ngOnInit() {
    this.newsletter$ = this.newsletterService.getAllNewsletters()
  }


}
