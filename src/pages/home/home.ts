import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';
import {MessagesPage} from '../messages/messages';
import {CreateuserPage} from '../createuser/createuser';
import {TabsPage} from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public username : string;
  public password : string; 
  public urlPhoto : string;  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  getHeaders() : Headers {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return headers;
  }
  login() {
    let body = 'username='+this.username+'&pwd='+this.password;

    this.http.post('http://cesi.cleverapps.io/signin', body, {headers: this.getHeaders()}).subscribe(res => {
      console.log('login succeed');
      sessionStorage.setItem('token', res.json().token);
      this.navCtrl.push(TabsPage, {
        token: res.json().token 
      });
    }, (err) => {
      console.log(err);
      alert("Authentication error");
    });
   
  }
  create() {
    this.navCtrl.push(CreateuserPage, {
    });
  }
}
