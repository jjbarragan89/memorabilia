import { Injectable } from '@angular/core';

import {IContacto} from '../../interface/contactos';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  public contactos: IContacto[] = [];
  gender = ['f','m']
  constructor() {
    for(let i = 1; i <= 20; i++){
      let index = i%3;
      let g = Math.floor( Math.random() * 2)
      const url_avatar =  "assets/images/avatares/"+ this.gender[g] + index + '.png'
      this.add_contactos(
        {
          id: i,
          nombre: "Nombre_" + i,
          apellido: "Apellido_" + i,
          fecha_cumpleanos: "04-09",
          edad:null,
          apodo:"Checho",
          parentezco:"Hermano",
          telefono: 3202577578,
          avatar: url_avatar
        })
    }
   }
  get_contactos(){
    return this.contactos;
  }

  add_contactos(contacto){
    this.contactos.push(contacto)
  }

  delete_contacto(contacto_id){
    this.contactos.forEach((element, index, object) => {
      if(element.id == contacto_id){
        this.contactos.splice(index)
        return;
      }
    });
  }
}
