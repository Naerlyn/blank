import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AbilitiesWQPage } from '../abilitiesW/abilitiesWQ/abilitiesWQ'
import { AbilitiesWEPage } from '../abilitiesW/abilitiesWE/abilitiesWE'
import { AbilitiesWSmitePage } from '../abilitiesW/abilitiesWSmite/abilitiesWSmite'
import { AbilitiesWFlashPage } from '../abilitiesW/abilitiesWFlash/abilitiesWFlash'
import { AbilitiesWNonePage } from '../abilitiesW/abilitiesWNone/abilitiesWNone'


@Component({
  selector: 'page-abilitiesW',
  templateUrl: 'abilitiesW.html'
})

export class AbilitiesWPage {

  tabWQRoot = AbilitiesWQPage;
  tabWERoot = AbilitiesWEPage;
  tabWSmiteRoot = AbilitiesWSmitePage;
  tabWFlashRoot = AbilitiesWFlashPage;  
  tabWNoneRoot = AbilitiesWNonePage;
  
  constructor(public navCtrl: NavController) {

  }

  WQ() {
    
        this.navCtrl.push(this.tabWQRoot);
        console.log("button WQ clicked");
  }
  myClickEventWE() {
    
        this.navCtrl.push(this.tabWERoot);
        console.log("button WE clicked");
  }
  myClickEventWSmite() {
    
        this.navCtrl.push(this.tabWSmiteRoot);
        console.log("button WSmite clicked");
  }
  myClickEventWFlash() {
    
        this.navCtrl.push(this.tabWFlashRoot);
        console.log("button WFlash clicked");
  }
  myClickEventWNone() {
    
        this.navCtrl.push(this.tabWNoneRoot);
        console.log("button WNone clicked");
  }
}
