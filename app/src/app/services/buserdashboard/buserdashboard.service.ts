/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { NDataModelService } from 'neutrinos-seed-services';

@Injectable()
export class buserdashboardService {

    menu = [
        {
            nav_one: 'Dashboard',
        }
    ];

    menuitem = [
        {
            navitem: 'Analytics'
        },
        {
            navitem: 'Interface'
        },
        {
            navitem: 'App Views'
        },
        {
            navitem: 'Charts'
        },
        {
            navitem: 'Box Transitions'
        }
    ];

    charts = {
        "userchartdata": [
            {
                data: [210, 357, 542, 410, 279, 508, 320], label: 'Page Views',
            },
            {
                data: [205, 300, 405, 310, 450, 340, 400], label: 'Active Users',
            }
        ],
        "userchartlabel": [
            {
                chartlabel: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }
        ]
    }
    dashboardData: any = [
        {
            "mainheaders": {
                "welcome": "Welcome to User Dashboard",
                "copyright": "Copyright © 2018 Neutrinos"
            },
            "userprofile": {
                "user": "Admin",
                "userimage": "Web/Icons/employ.png",
                "userincome": "Updated - Income",
                "income": "$260,104,200"
            },
            "userviews": {
                "cardSubTitle": "Page Views",
                "cardContent": "In Last Week"
            },
            "activeduration": {
                "cardSubTitle": "Active Users",
                "cardContent": "In Every week"
            },
            "useractivity": [
                {
                    "cardTitle": "$1 206,90",
                    "cardSubTitle": "All INCOME",
                    "cardContent": "Social Users",
                    "cardDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit vestibulum. ",
                    "cardIcon": "timeline",
                    "cardbuffer": "80",
                    "cardinfo": "Pages / Visit",
                    "cardinfo1": "% New Visits",
                    "cardvalue": "7.80",
                    "cardvalue2": "76.43%"
                },
                {
                    "cardTitle": "201",
                    "cardSubTitle": "PAGE VIEWS",
                    "cardContent": "Social Users",
                    "cardDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit vestibulum.",
                    "cardIcon": "share",
                    "cardbuffer": "40",
                    "cardinfo": "Today Visits",
                    "cardinfo1": "Last Day Visits",
                    "cardvalue": "7.80",
                    "cardvalue2": "76.43%"
                },
                {
                    "cardTitle": "860k+",
                    "cardSubTitle": "USERS ACTIVITY",
                    "cardContent": "Social Users",
                    "cardDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit vestibulum.",
                    "cardbuffer": "65",
                    "cardIcon": "laptop",
                    "cardinfo": "Active Users",
                    "cardinfo1": "Visits",
                    "cardvalue": "45.80",
                    "cardvalue2": "50.43%"
                },
                {
                    "cardTitle": "201",
                    "cardSubTitle": "TODAY INCOME",
                    "cardContent": "Social Users",
                    "cardDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit vestibulum.",
                    "cardbuffer": "75",
                    "cardIcon": "attach_money",
                    "cardinfo": "Today",
                    "cardinfo1": "Last week",
                    "cardvalue": "$230,00",
                    "cardvalue2": "$7 980,60"
                }],
        }
    ]

    constructor(private bdms: NDataModelService) {
        
    }
    getChartData() {
        return this.charts;
    }
}
