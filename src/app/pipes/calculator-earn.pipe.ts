import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculatorEarn'
})
export class CalculatorEarnPipe implements PipeTransform {

  transform(value: string, args?: any[]): number {
    let precioDolares = parseFloat(value) + (parseFloat(value)* 0.07);
    let precioDolarToday = parseFloat(args[0]);
    let prime = parseFloat(args[1]);
    let porcentaje =  0.01 * parseFloat(args[2]);
    let envio = parseFloat(args[3]);
    let precioTotal = ( precioDolarToday * ( precioDolares + prime)) + envio;
    precioTotal = (precioTotal * porcentaje) + (((parseFloat(value)* 0.07)+ prime)* precioDolarToday);
    return (isNaN(precioTotal) || precioDolares == 0 ? 0 : precioTotal);
  }

}
