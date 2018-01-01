import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AbilitiesQPage } from '../abilitiesQ/abilitiesQ';
import { AbilitiesWPage } from '../abilitiesW/abilitiesW';
import { AbilitiesEPage } from '../abilitiesE/abilitiesE';
import { AbilitiesRPage } from '../abilitiesR/abilitiesR';

@Component({
  selector: 'page-abilities1',
  templateUrl: 'abilities1.html'
})
export class Abilities1Page {

  tabQRoot = AbilitiesQPage;
  tabWRoot = AbilitiesWPage;
  tabERoot = AbilitiesEPage;
  tabRRoot = AbilitiesRPage;
  //tabRunesRoot = RunesPage;

  constructor(public navCtrl: NavController) {

  }
    myClickEventQ() {
      
          this.navCtrl.push(this.tabQRoot);
          console.log("button Q clicked");
    }
    myClickEventW() {
  
      this.navCtrl.push(this.tabWRoot);
      console.log("button W clicked");
    }
    myClickEventE() {
      
          this.navCtrl.push(this.tabERoot);
          console.log("button E clicked");
    }
    myClickEventR() {
  
      this.navCtrl.push(this.tabRRoot);
      console.log("button R clicked");
    }
    /*clickRunes() {

      this.navCtrl.push(this.tabRunesRoot);
      console.log("button Runes clicked");
    }*/
}
