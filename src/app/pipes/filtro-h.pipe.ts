import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroH'
})
export class FiltroHPipe implements PipeTransform {

  transform( arreglo: any[], texto: string, columna: string ): any[] {

if ( texto === '' || texto === 'todos' ) {
return arreglo;
}

texto = texto.toLowerCase();


return arreglo.filter( item => {
return item[columna].toLowerCase()
     .includes( texto );
});

}


}
