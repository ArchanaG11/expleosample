/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Inject } from '@angular/core'
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
/**
 * Service import Example :
 * import { HeroService } from '../../services/hero/hero.service';
 */

/**
 *
 * Service Designer import Example - Service Name - HeroService
 * import { HeroService } from 'app/sd-services/HeroService';
 */

@Component({
    selector: 'bh-loader',
    templateUrl: './loader.template.html',
})

export class loaderComponent extends NBaseComponent implements OnInit {

    constructor(private bdms: NDataModelService,
    @Inject(MAT_DIALOG_DATA) public data) {
        super();
    }


    ngOnInit() {
    }
}
