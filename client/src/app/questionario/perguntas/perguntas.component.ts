import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { PerguntaService } from '../../shared/services/pergunta.service';
import { Tema } from '../../shared/models/tema.model';
import { Proposicao } from '../../shared/models/proposicao.model';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.scss']
})
export class PerguntasComponent implements OnInit, OnDestroy {

  private unsubscribe = new Subject();

  private temaSelecionado: string;

  private listaTemas: Tema[];
  private listaProposicoes: Proposicao[];

  private listaPerguntasTema: Proposicao[];
  private perguntaSelecionada: Proposicao;

  constructor(private perguntaService: PerguntaService) {
    // Inicia tema a partir do ID
    this.temaSelecionado = '3';
  }

  ngOnInit() {
    this.perguntaService.getTemas().pipe(takeUntil(this.unsubscribe)).subscribe(
      temas => this.listaTemas = temas,
      error => console.log(error)
    );

    this.perguntaService.getProposicoes().pipe(takeUntil(this.unsubscribe)).subscribe(
      proposicoes => {
        this.listaProposicoes = proposicoes;
        this.listaPerguntasTema = this.listaProposicoes.filter((proposicao) => proposicao.tema_id === Number(this.temaSelecionado));
        this.perguntaSelecionada = this.listaPerguntasTema[0];
      },
      error => console.log(error)
    );
  }

  onTemaChange() {
    this.listaPerguntasTema = this.listaProposicoes.filter((proposicao) => {
      return proposicao.tema_id === Number(this.temaSelecionado);
    });

    this.perguntaSelecionada = this.listaPerguntasTema[0];
  }

  escolhePergunta(pergunta_id) {
    this.perguntaSelecionada = this.listaPerguntasTema.filter((pergunta) => {
      return pergunta.id_votacao === pergunta_id
    })[0];  
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
