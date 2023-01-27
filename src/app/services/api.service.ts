import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/models/myContacts';
import { myGroup } from 'src/models/myGroup';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

   baseUrl:string="http://localhost:3000/contacts"  //variable-baseUrl:type string
   grpUrl:string="http://localhost:3000/groups/"
  constructor(private http:HttpClient) { }
  //function to get all contacts
  getAllContacts():Observable<MyContact>{    //function result as observable type same as type defined in mycontact file
   return this.http.get(this.baseUrl)
  }

  //function for viewing a particular contact
  viewContact(contactId:string){
   return this.http.get(`${this.baseUrl}/${contactId}`)
  }
  // function to get all groups
  getAllGroups():Observable<myGroup>{
     return this.http.get(this.grpUrl)
  }

  // function to get particular groupname
  getGroupName(gId:string){
   return this.http.get( this.grpUrl+gId)
  }

  //function to add contact on server
  addContact(contactBody:any){
     return this.http.post(this.baseUrl,contactBody)
  }

}
