import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'arrayDisplay'
})
export class ArrayDisplayPipe implements PipeTransform {

    transform(data: Array<string>) {
        return data.join(' ');
    }
}