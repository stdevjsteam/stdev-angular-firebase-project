import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'homeDataSearch'
})
export class HomeDataSearch implements PipeTransform {

    transform(data, pname: string, stack: string) {

        if (!pname && !stack) { return data; }

        else if (!stack) {

            pname = pname.replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');

            return data.data.filter(element => element.pname.toLowerCase() === pname.toLowerCase());

        }

        else if (!pname) {

            let stackArr = stack.replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '').split(' ');

            return data.filter(element => {

                for (let key of stackArr) {
                    if (!element.data.stack.find(element => element.toLowerCase() === key.toLowerCase())) { return false; }
                }

                return true;

            });

        }

        else {

            let stackArr = stack.replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '').split(' ');
            pname = pname.replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');

            return data
                .filter(element => element.data.pname.toLowerCase() === pname.toLowerCase())
                .filter(
                    (element) => {

                        for (let i = 0; i < stackArr.length; i++) {
                            let stackAvailability = element.data.stack.find(element => element.toLowerCase() === stackArr[i].toLowerCase());
                            if (!stackAvailability) { return false; }
                        }

                        return true;

                    }
                );
        }
    }
}