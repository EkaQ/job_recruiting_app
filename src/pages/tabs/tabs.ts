import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { StudentPage } from '../student/student';
import { CompanyPage } from '../company/company';
import { DatesPage } from '../dates/dates';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = StudentPage;
  tab5Root = CompanyPage;
  tab6Root = DatesPage;


  constructor() {

  }
}
