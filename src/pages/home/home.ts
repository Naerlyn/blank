import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Abilities1Page } from '../abilities1/abilities1';
import {ChecklistModel} from '../../models/checklist-model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  tab1Root = Abilities1Page;
  
  constructor(public navCtrl: NavController) {

  }

  
    myClickEvent() {
  
      this.navCtrl.push(this.tab1Root);
      console.log("button clicked");
    }

}
