import { Component, EventEmitter, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Size, SizeRes } from 'src/app/models/data.models';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-add-size',
    templateUrl: './add-size.component.html',
    styleUrls: ['./add-size.component.scss']
})
export class AddSizeComponent implements OnInit {

    size?: Size;
    sizeLabel: string = '';
    sizeValue: string = '';

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
        this.sizeValue = lowerVal.replace(/ /g, "");
    }

    editSize() {

    }

    addSize() {
        let data = {
            label : this.sizeLabel,
            value : this.sizeValue
        }
        this._callData.addSize(data).subscribe(
            (res : any) => {
                // this.bsModalRef.hide()
            }
        )
    }

}
