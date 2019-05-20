import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';
import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../shared/components/shared.module';
import { AlinhamentoRoutingModule } from './alinhamento-routing.module';

import { AlinhamentoComponent } from './alinhamento.component';
import { FilterComponent } from './filter/filter.component';
import { CardParlamentarComponent } from './card-parlamentar/card-parlamentar.component';

@NgModule({
  declarations: [
    AlinhamentoComponent,
    FilterComponent,
    CardParlamentarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule,
    NgbModule,
    LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset
    }),
    SharedModule,
    AlinhamentoRoutingModule
  ]
})
export class AlinhamentoModule { }