import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'codeExampleDataSearch'
})
export class CodeExampleDataSearch implements PipeTransform {

    transform(data, stack: string) {

        if (!stack) { return data; }

        let stackArr = stack.replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '').split(' ');

        return data.filter(element => {

            for (let key of stackArr) {
                if (!element.data.stack.find(element => element.toLowerCase() === key.toLowerCase())) { return false; }
            }

            return true;

        });

    }
}