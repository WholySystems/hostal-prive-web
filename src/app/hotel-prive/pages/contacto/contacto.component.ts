import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hotel-prive-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

  enviar_sms(){
    const name = document.getElementById("name")  as HTMLInputElement;
    const motivo = document.getElementById("motivo")  as HTMLInputElement;
    const comentario = document.getElementById("comentario")  as HTMLInputElement;
    const text = `Hola, mi nombre es ${name.value}%0AMotivo: ${motivo.value}%0A ${comentario.value}`
    const redirect = document.getElementById("redirect")  as HTMLLinkElement;
    redirect.target = "_blank";
    if (name.value == "" || motivo.value == "" ) {
      name.style.borderColor = "red";
      motivo.style.borderColor = "red"
    }else{
      name.style.borderColor = "var(--verde-orcuro)";
      name.value = ""
      motivo.style.borderColor = "var(--verde-orcuro)";
      motivo.value = ""
      redirect.href = 'https://api.whatsapp.com/send?phone=51926775658&text=' + text;
    }
  }
}
