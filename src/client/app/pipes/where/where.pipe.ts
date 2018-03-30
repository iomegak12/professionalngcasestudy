import { PipeTransform, Pipe } from "@angular/core";

const MIN_ITEMS = 1;
const MIN_FIND_POS = 0;

@Pipe({
    name: 'where'
})
class WherePipe implements PipeTransform {
    transform(bindingValue: any[], columnName: string, columnValue: any): any[] {
        let filteredValues = bindingValue;

        let validation = bindingValue && bindingValue.length >= MIN_ITEMS &&
            columnName && columnValue;

        if (validation) {
            filteredValues = bindingValue.filter(
                (item: any) => {
                    let selectedColumnValue = item[columnName];
                    let isConditionSatisfied = selectedColumnValue.indexOf(columnValue) >= MIN_FIND_POS;

                    return isConditionSatisfied;
                });
        }

        return filteredValues;
    }
}

export default WherePipe;
