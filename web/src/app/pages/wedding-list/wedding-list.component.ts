import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ConfirmComponent } from '../../components/confirm/confirm.component';
import { SeparatorComponent } from '../../components/separator/separator.component';

@Component({
  selector: 'app-wedding-list',
  standalone: true,
  imports: [HeaderComponent,FooterComponent, ConfirmComponent, SeparatorComponent],
  templateUrl: './wedding-list.component.html',
  styleUrl: './wedding-list.component.css'
})
export class WeddingListComponent {

}
