/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { NDataModelService, NSessionStorageService } from 'neutrinos-seed-services';
import { buserdashboardService } from '../../services/buserdashboard/buserdashboard.service';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MediaObserver } from '@angular/flex-layout';
import { NeutrinosOAuthClientService } from 'neutrinos-oauth-client';
import { NLogoutService } from 'neutrinos-seed-services';
import { Router } from '@angular/router';

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
    selector: 'bh-home',
    templateUrl: './home.template.html',
    styles: [`
    .dashboard-toolbar{
        height: 64px !important;
        z-index:9;
    }
    .sidenav{
        position: absolute !important;
        top:64px !important;
        margin-bottom:40px;
        bottom: 10px !important;
    }
    .nav-exapansion {
        width: 224px;
        box-shadow:none !important;
        background: #fafafa !important;
    }
    .user-profile{
        width:40% !important;
        margin-top:0px !important;
    }
    .footer{
        height:50px !important;
        position: fixed;
        bottom: 0;
        z-index: 10;
    }
    .panel-outlet{
        overflow-y:overlay;
        height:245px;
    }`]
})

export class homeComponent extends NBaseComponent implements OnInit {

    userDetails;
    menuitem;
    menu;
    users;
    public userInfo = this.neutrinosOAuthClientService.userInfo;
    constructor(private userdashboard: buserdashboardService, private bdms: NDataModelService,
        private neutrinosOAuthClientService: NeutrinosOAuthClientService, private router: Router,
        private sessionStorage: NSessionStorageService, public media: MediaObserver) {
        super();
        this.menu = userdashboard.menu;
        this.menuitem = userdashboard.menuitem;

    }

    ngOnInit() {
        this.users = this.sessionStorage.getValue("userObj");
        this.userDetails = this.userdashboard.dashboardData[0];
    }

    logout() {
        this.neutrinosOAuthClientService.logout();
    }
}
