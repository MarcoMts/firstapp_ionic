import { Component } from '@angular/core';

import { MessagesPage } from '../messages/messages';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MessagesPage;
  tab2Root = ContactPage;

  constructor() {

  }
}