import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './cont.component.html',
  styleUrls: ['./cont.component.css']
})
export class ContactComponent {
  facebookurl: string='https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent('https://www.facebook.com/998428336sachin@gmail.com');
}
