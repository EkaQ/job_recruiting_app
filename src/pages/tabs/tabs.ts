import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { StudentinscriptionPage } from '../studentinscription/studentinscription';
import { CompanyinscriptionPage } from '../companyinscription/companyinscription';
import { LoginPage } from '../login/login';
import { StudentPage } from '../student/student';
import { CompanyPage } from '../company/company';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = StudentPage;
  tab5Root = CompanyPage;
  tab6Root = StudentinscriptionPage;
  tab7Root = CompanyinscriptionPage;
  tab8Root = LoginPage;


  constructor() {

  }
}
