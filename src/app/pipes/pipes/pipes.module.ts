import { NgModule } from '@angular/core';
import { FiltroPipe } from '../filtro.pipe';
import { FiltroHPipe } from '../filtro-h.pipe';

@NgModule({
  declarations: [FiltroPipe,
                 FiltroHPipe],
  exports: [FiltroPipe,
            FiltroHPipe]
})
export class PipesModule { }
