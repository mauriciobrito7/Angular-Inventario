import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculatorEarn'
})
export class CalculatorEarnPipe implements PipeTransform {

  transform(value: string, args?: any[]): number {
    let precioDolares = parseFloat(value) + (parseFloat(value)* 0.07);
    let precioDolarToday = args[0];
    let prime = args[1];
    let porcentaje =  0.01 * args[2];
    let envio = args[3];
    let precioTotal = ( precioDolarToday * ( precioDolares + prime)) + envio;
    precioTotal = (precioTotal * porcentaje) - envio;
    return (isNaN(precioTotal) || precioDolares == 0 ? 0 : parseInt(precioTotal));
  }

}
