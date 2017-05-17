import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculatorPrice'
})
export class CalculatorPricePipe implements PipeTransform {

  transform(value: string, args?: any[]): number {
    let precioDolares = parseFloat(value);
    let precioDolarToday = args[0];
    let prime = args[1];
    let porcentaje =  0.01 * args[2];
    let envio = args[3];
    let precioTotal = ( precioDolarToday * ( precioDolares + prime)) + 20000;
    precioTotal = (precioTotal * porcentaje) + precioTotal;
    return (isNaN(precioTotal) || precioDolares == 0 ? 0 : precioTotal);
  }

}
