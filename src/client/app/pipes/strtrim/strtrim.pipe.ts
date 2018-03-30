import { Pipe, PipeTransform } from "@angular/core";

const DEFAULT_NO_OF_CHARS: number = 50;
const START_POS = 0;

@Pipe({
    name: 'strtrim'
})
class StringTrimPipe implements PipeTransform {
    transform(bindingValue: string, noOfCharacters: number = DEFAULT_NO_OF_CHARS): string {
        let transformedValue = bindingValue;

        if (bindingValue && bindingValue.length >= noOfCharacters) {
            transformedValue = bindingValue.substr(START_POS, noOfCharacters);

            transformedValue += ' ...';
        }

        return transformedValue;
    }
}

export default StringTrimPipe;
