import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';
import {HomePage} from '../home/home';

/**
 * Generated class for the CreateuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createuser',
  templateUrl: 'createuser.html',
})
export class CreateuserPage {
  public username : string;
  public password : string; 
  public urlPhoto : string;  

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateuserPage');
  }
  getHeaders() : Headers {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return headers;
  }
  createUser() {
    let body = 'username='+this.username+'&pwd='+this.password+'&urlPhoto='+this.urlPhoto;

    this.http.post('http://cesi.cleverapps.io/signup', body, {headers: this.getHeaders()}).subscribe(res => {
      console.log('create succeed');
      this.navCtrl.push(HomePage, {
      });
    }, (err) => {
      console.log(err);
      alert("Creation error");
    });
   
  }
}
