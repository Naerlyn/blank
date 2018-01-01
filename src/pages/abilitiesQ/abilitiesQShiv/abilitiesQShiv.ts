import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Abilities1Page } from '../../abilities1/abilities1';

@Component({
      selector: 'page-abilitiesQShiv',
      templateUrl: 'abilitiesQShiv.html'
    })
    export class AbilitiesQShivPage {
    
      tabHomeRoot = Abilities1Page;
      
      constructor(public navCtrl: NavController) {
    
      }
      goHome() {
        
            this.navCtrl.push(this.tabHomeRoot);
            console.log("button goHome clicked");
      }
    }