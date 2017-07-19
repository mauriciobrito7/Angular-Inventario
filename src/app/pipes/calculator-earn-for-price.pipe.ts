import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculatorEarnForPrice'
})
export class CalculatorEarnForPricePipe implements PipeTransform {

  transform(value: string, args?: any[]): number {
    let precioDolares = parseFloat(value) + (parseFloat(value)* 0.07);
    let precioDolarToday = parseFloat(args[0]);
    let prime = parseFloat(args[1]);
    let monto = parseFloat(args[2]);
    let envio = parseFloat(args[3]);
    let porcentaje =  0.01 * parseFloat(args[4]);
    let precioTotal = (( precioDolarToday * ( precioDolares + prime)) + envio);
    precioTotal = (monto - precioTotal) + (((parseFloat(value)* 0.07)+ prime)* precioDolarToday) ;
    return (isNaN(precioTotal) || monto == 0 ? 0 : precioTotal);
  }

}
