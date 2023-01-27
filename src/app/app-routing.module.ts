import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ViewCotactComponent } from './view-cotact/view-cotact.component';

const routes: Routes = [
  //to redirect automatically from localHost4200 to ContactManager
  {
     path:'', redirectTo:'contacts/admin', pathMatch:'full'
  },
  //path for contact manager component
  {
    path:'contacts/admin',component:ContactManagerComponent
  },

  {
    path:'contacts/add',component:AddContactComponent
  },

  {
    path:'contacts/update/:contactId',component:UpdateContactComponent 
  },
  {
    path:'contacts/view/:contactId',component:ViewCotactComponent
  },

  {
    path:'**',component: PageNotFoundComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
