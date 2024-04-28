import { Component } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Color, ColorRes, Size, SizeRes } from 'src/app/models/data.models';
import { DataService } from 'src/app/services/data.service';
import { AddSizeComponent } from './add-size/add-size.component';
import { take } from 'rxjs';
import { AddColorComponent } from './add-color/add-color.component';

@Component({
    selector: 'app-attributes',
    templateUrl: './attributes.component.html',
    styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent {
    data: any
    sizeData : Size[] = []; 
    colorData : Color[] = []; 

    bsModalRef?: BsModalRef;

    constructor(
        private modalService: BsModalService,
        private _callData: DataService,
    ) { }

    addSize(data? : Size) {
        const initialState: ModalOptions = {
            initialState: {
                size: data
            }
        };
        this.bsModalRef = this.modalService.show(AddSizeComponent, initialState);
        // this.bsModalRef.setClass('modal-lg');
        this.bsModalRef.onHide?.pipe(take(1)).subscribe(val => {
            if (val) {
                this.getSizes();
            }
        });
    }

    addColor(data? : Color) {
        const initialState: ModalOptions = {
            initialState: {
                color: data
            }
        };
        this.bsModalRef = this.modalService.show(AddColorComponent, initialState);
        // this.bsModalRef.setClass('modal');
        this.bsModalRef.onHide?.pipe(take(1)).subscribe(val => {
            if (val) {
                this.getSizes();
            }
        });
    }

    getSizes(){
        this._callData.getAllSizes().subscribe(
            (res : SizeRes) => {
                this.sizeData = res.data;
            }
        );
    }
    
    getColors(){
        this._callData.getAllColors().subscribe(
            (res : ColorRes) => {
                this.colorData = res.data;
            }
        );
    }
}
