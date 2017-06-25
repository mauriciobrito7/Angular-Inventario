import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculatorEarnForPrice'
})
export class CalculatorEarnForPricePipe implements PipeTransform {

  transform(value: string, args?: any[]): number {
    let precioDolares = parseFloat(value) + (parseFloat(value)* 0.07);
    let precioDolarToday = args[0];
    let prime = args[1];
    let monto = args[2];
    let envio = args[3];
    let porcentaje =  0.01 * args[4];
    let precioTotal = (( precioDolarToday * ( precioDolares + prime)) + envio);
    precioTotal = (monto - precioTotal) ;
    return (isNaN(precioTotal) || monto == 0 ? 0 : precioTotal);
  }

}
