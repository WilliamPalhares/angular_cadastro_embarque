import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { Funcionario } from "../models/funcionario";

@Component({
  selector: 'app-embarque-list',
  templateUrl: './embarque-list.component.html',
  styleUrls: ['./embarque-list.component.css']
})

export class EmbarqueListComponent {
  TitleModal: string;
  modalRef: BsModalRef;
  bsConfig: Partial<BsDatepickerConfig>;
  
  constructor(private modalService: BsModalService
            , private localeService: BsLocaleService) {}

  funcionario : Funcionario = {
    Id: 0,
    Nome: "",
    Empresa: "",
    Funcao: "",
    DataHoraDesembarque: "",
    DataHoraEmbarque: ""
  };

  list = [];

  add() {
    let func;

    if (this.funcionario.Nome == "") {
      alert("O campo Nome é Obrigátorio.");
      return false;
    }

    if (this.funcionario.Empresa == "") {
      alert("O campo Empresa é Obrigátorio.");
      return false;
    }

    if (this.funcionario.Funcao == "") {
      alert("O campo Função é Obrigátorio.");
      return false;
    }

    var t = this.list.find(temp => temp.Nome.toUpperCase().trim() == this.funcionario.Nome.toUpperCase().trim()
                                && temp.Empresa.toUpperCase().trim() == this.funcionario.Empresa.toUpperCase().trim()
                                && temp.Funcao.toUpperCase().trim() == this.funcionario.Funcao.toUpperCase().trim());
    
    if (t != null) {
      alert("Usuário já cadastrado.");
      return false;  
    }
    
    func = Object.assign({}, this.funcionario);
    func.Id = this.list.length + 1;
    this.list.push(func);
    this.modalRef.hide();
  }

  addEmbarque() {
    this.modalRef.hide();
  }

  openModalCadastro(modelCadastro: TemplateRef<any>, funcionario: Funcionario) {
    this.TitleModal = "Novo Cadastro";

    if (funcionario == null) {
      this.TitleModal = "Editar Cadastro";
      this.funcionario.Id = 0;
    }
    else {
      this.funcionario = funcionario;
    }

    this.modalRef = this.modalService.show(
      modelCadastro,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  openModalEmbarque(modelEmbaque: TemplateRef<any>, funcionario: Funcionario) {
    this.TitleModal = "Embarque";
    this.funcionario = funcionario;
    this.modalRef = this.modalService.show(modelEmbaque);
  }

  ngOnInit() {
    this.bsConfig = Object.assign({}, { 
        containerClass: 'theme-red', 
        showWeekNumbers: false ,
        minDate: new Date(),
        dateInputFormat: 'DD/MM/YYYY'
    });
    this.localeService.use('pt-br');
  }
}
