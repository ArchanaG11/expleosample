import { userviews } from '../src/app/models/userviews.model';
import { activeduration } from '../src/app/models/activeduration.model';
import { userActivity } from '../src/app/models/userActivity.model';
import { currentActivity } from '../src/app/models/currentActivity.model';
import { lastActivity } from '../src/app/models/lastActivity.model';
import { userimprovements } from '../src/app/models/userimprovements.model';
import { user } from '../src/app/models/user.model';
import { userlist } from '../src/app/models/userlist.model';
import { linechartdata } from '../src/app/models/linechartdata.model';
import { userauth } from '../src/app/models/userauth.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
userviews: userviews;
activeduration: activeduration;
useractivity: userActivity;
currentactivity: currentActivity;
lastactivity: lastActivity;
userimprovements: userimprovements;
user: user;
userlist: userlist;
linechartdata: linechartdata;
userauth: userauth;
//DECLARE NEW VARIABLE

constructor() {
this.userviews = new userviews();
this.activeduration = new activeduration();
this.useractivity = new userActivity();
this.currentactivity = new currentActivity();
this.lastactivity = new lastActivity();
this.userimprovements = new userimprovements();
this.user = new user();
this.userlist = new userlist();
this.linechartdata = new linechartdata();
this.userauth = new userauth();
//CREATE NEW DM INSTANCE
    }
}