import { Component, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Color } from 'src/app/models/data.models';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-add-color',
    templateUrl: './add-color.component.html',
    styleUrls: ['./add-color.component.scss']
})
export class AddColorComponent {

    color? : Color
    colorLabel: string = '';
    colorValue: string = '';
    colorHex: string = '';

    hideEvent: EventEmitter<any> = new EventEmitter();

    constructor(
        public bsModalRef: BsModalRef,
        private _callData: DataService
    ) { }

    ngOnInit() {

    }

    ngOnDestroy() {
        this.hideEvent.next(true); // modal is closed without any data.
    }

    createSlug(val: string) {
        let lowerVal = val.toLowerCase();
        this.colorValue = lowerVal.replace(/ /g, "");
    }

    editColor() {

    }

    addColor() {
        let data = {
            label : this.colorLabel,
            value : this.colorValue,
            colorHex : this.colorHex
        }
        console.log(data)
        this._callData.addSize(data).subscribe(
            (res : any) => {
                // this.bsModalRef.hide()
            }
        )
    }

}
