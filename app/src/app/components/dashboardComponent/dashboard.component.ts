/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NDataModelService } from 'neutrinos-seed-services';
import { buserdashboardService } from '../../services/buserdashboard/buserdashboard.service';
import { NLogoutService } from 'neutrinos-seed-services';
import { Router } from '@angular/router';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

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
    selector: 'bh-dashboard',
    templateUrl: './dashboard.template.html',
    styles: [`
    .user-layout1{
        padding:25px 25px;
        background: #c1c1bd;
    }
    .user-font{
        font-weight: 500;
    }
    .user-layout2{
        padding: 25px 15px 40px 15px;
        background: #c1c1bd;
    }`]
})

export class dashboardComponent extends NBaseComponent implements OnInit {

    lineChartLabels: any;
    menu;
    lineChartData: any;
    menuitem;
    userDetails;
    chartData;

    users;

    cardTitleVal;
    cardActiveVal;
    cardval = 0;
    ActiveCardval = 0;


    constructor(private userdashboard: buserdashboardService, private bdms: NDataModelService,
        private nlogout: NLogoutService, private router: Router) {
        super();

        this.menu = userdashboard.menu;

        this.menuitem = userdashboard.menuitem;
    }

    ngOnInit() {

        this.chartData = this.userdashboard.getChartData();
        this.lineChartData = this.chartData.userchartdata;
        this.lineChartLabels = this.chartData.userchartlabel[0].chartlabel;
        this.userDetails = this.userdashboard.dashboardData[0];

        this.cardTitleVal = this.lineChartData[0].data;
        this.cardActiveVal = this.lineChartData[1].data;
        this.addCardTitleVal();
    }

    // Line Charts Events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    // for display the card value
    addCardTitleVal() {
        for (var i = 0; this.cardTitleVal.length > i; i++) {
            this.cardval = this.cardval + this.cardTitleVal[i];
        }
        for (var i = 0; this.cardActiveVal.length > i; i++) {
            this.ActiveCardval = this.ActiveCardval + this.cardActiveVal[i];
        }
    }
}
