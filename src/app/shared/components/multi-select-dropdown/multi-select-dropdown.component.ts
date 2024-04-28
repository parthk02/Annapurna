import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-multi-select-dropdown',
    templateUrl: './multi-select-dropdown.component.html',
    styleUrls: ['./multi-select-dropdown.component.scss']
})
export class MultiSelectDropdownComponent {
    @Input() list?: any[];
    @Input() color?: boolean;
    @Input() selectedData?: any;

    @Output() shareCheckedList = new EventEmitter();
    @Output() shareIndividualCheckedList = new EventEmitter();

    checkedList: any[] = [];
    checkedListValue: any[] = [];
    currentSelected?: {};

    showDropDown: boolean = false;

    constructor() {
    }

    onChange() {
        debugger;
    }

    getSelectedValue(status: boolean, value: string, label : string) {
        if (status) {
            this.checkedList.push(label);
            this.checkedListValue.push(value);
        } else {
            var index = this.checkedList.indexOf(label);
            var indexValue = this.checkedList.indexOf(value);
            this.checkedList.splice(index, 1);
            this.checkedListValue.splice(indexValue, 1);
        }
        console.log(this.checkedList)
        console.log( "Value list" , this.checkedListValue)

        this.currentSelected = { checked: status, name: value };
        console.log(this.currentSelected)
        //share checked list
        this.shareCheckedlist();

        //share individual selected item
        this.shareIndividualStatus();
    }
    shareCheckedlist() {
        this.shareCheckedList.emit(this.checkedListValue);
    }
    shareIndividualStatus() {
        this.shareIndividualCheckedList.emit(this.currentSelected);
    }
}
