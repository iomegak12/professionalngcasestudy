import { PipeTransform, Pipe } from "@angular/core";

const SYMBOLS = {
    CHECK: '\u2713',
    CROSS: '\u2718'
};

@Pipe({
    name: 'symbol'
})
class SymbolPipe implements PipeTransform {
    transform(bindingValue: boolean): string {
        return bindingValue ? SYMBOLS.CHECK : SYMBOLS.CROSS;
    }
}

export default SymbolPipe;