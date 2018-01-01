import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*import { AbilitiesQWPage } from '../abilitiesQ/abilitiesQW/abilitiesQW'
import { AbilitiesQEPage } from '../abilitiesQ/abilitiesQE/abilitiesQE'
import { AbilitiesQRPage } from '../abilitiesQ/abilitiesQR/abilitiesQR'*/
import { AbilitiesQTHydraPage } from '../abilitiesQ/abilitiesQTHydra/abilitiesQTHydra'
import { AbilitiesQShivPage } from '../abilitiesQ/abilitiesQShiv/abilitiesQShiv'
import { AbilitiesQRFCPage } from '../abilitiesQ/abilitiesQRFC/abilitiesQRFC'
import { AbilitiesQNonePage } from '../abilitiesQ/abilitiesQNone/abilitiesQNone'

@Component({
  selector: 'page-abilitiesQ',
  templateUrl: 'abilitiesQ.html'
})

export class AbilitiesQPage {

      /*tabQWRoot = AbilitiesQWPage;
      tabQERoot = AbilitiesQEPage;
      tabQRRoot = AbilitiesQRPage;*/
      tabQTHydraRoot = AbilitiesQTHydraPage;
      tabQShivRoot = AbilitiesQShivPage;
      tabQRFCRoot = AbilitiesQRFCPage;
      tabQNoneRoot = AbilitiesQNonePage;

  constructor(public navCtrl: NavController) {

  }
  /*myClickEventQW() {
    
        this.navCtrl.push(this.tabQWRoot);
        console.log("button QW clicked");
  }
  
  myClickEventQE() {
      
      this.navCtrl.push(this.tabQERoot);
      console.log("button QE clicked");
  }*/

  myClickEventQTHydra() {
    
        this.navCtrl.push(this.tabQTHydraRoot);
        console.log("button QTHydra clicked");
  }

  myClickEventQShiv() {
    
        this.navCtrl.push(this.tabQShivRoot);
        console.log("button QShiv clicked");
  }

  myClickEventQRFC() {
    
        this.navCtrl.push(this.tabQRFCRoot);
        console.log("button QRFC clicked");
  }
  myClickEventQNone() {
    
        this.navCtrl.push(this.tabQNoneRoot);
        console.log("button QNone clicked");
  }
}
