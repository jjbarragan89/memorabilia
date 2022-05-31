import { ContactosService } from './../../services/mocks/contactos.service';
import { IContacto } from './../../interface/contactos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  public contactos: IContacto[];
  constructor(public mockContactos: ContactosService) { }

  ngOnInit() {
    this.contactos = this.mockContactos.get_contactos()
  }

}
