import { CepService } from './../../cep.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],


})
export class ContactComponent implements OnInit {

  constructor(private cepService: CepService) { }


  buscarEndereco(){
    const cep = (document.getElementById('cep') as HTMLInputElement).value;

    this.cepService.buscarEnderecoPorCep(cep).subscribe((data: any)=>{
      (document.getElementById('log') as HTMLInputElement).value = data.logradouro;
      (document.getElementById('bairro') as HTMLInputElement).value = data.complemento;
      (document.getElementById('city') as HTMLInputElement).value = data.localidade;
      (document.getElementById('uf') as HTMLInputElement).value = data.uf;
    })
  }


  ngOnInit(): void {


  }

}
