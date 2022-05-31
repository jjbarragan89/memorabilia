import { IContacto } from './../../interface/contactos';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent implements OnInit {

  @Input() contacto: IContacto;
  constructor() { }

  ngOnInit() {}

}
