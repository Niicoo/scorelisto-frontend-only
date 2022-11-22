import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public isCollapsed = true;

  constructor(){
  }
}
