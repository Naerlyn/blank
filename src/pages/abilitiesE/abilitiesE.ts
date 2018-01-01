import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AbilitiesEFlashPage } from '../abilitiesE/abilitiesEFlash/abilitiesEFlash'
import { AbilitiesENonePage } from '../abilitiesE/abilitiesENone/abilitiesENone'

@Component({
  selector: 'page-abilitiesE',
  templateUrl: 'abilitiesE.html'
})

export class AbilitiesEPage {

  tabEFlashRoot = AbilitiesEFlashPage;  
  tabENoneRoot = AbilitiesENonePage;

  constructor(public navCtrl: NavController) {

  }
  myClickEventEFlash() {
    
        this.navCtrl.push(this.tabEFlashRoot);
        console.log("button EFlash clicked");
  }
  myClickEventENone() {
    
        this.navCtrl.push(this.tabENoneRoot);
        console.log("button ENone clicked");
  }
}
