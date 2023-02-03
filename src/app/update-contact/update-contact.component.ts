import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MyContact } from 'src/models/myContacts';
import { myGroup } from 'src/models/myGroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit{
  contactId:string=''
  contact:MyContact={} as MyContact
  allGroups:myGroup[]=[] as myGroup[]
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private router:Router){}
  ngOnInit(): void {
    //get contactId from url parametre using ActivatedRoute class
    this.activatedRoute.params.subscribe((data)=>{
      console.log(data['contactId']);
      this.contactId=data['contactId']
    })

    //for getting particular contact
    this.api.viewContact(this.contactId)
    .subscribe((data:any)=>{
      console.log(data);
      this.contact=data
    })

    // function to get allGroups
    this.api.getAllGroups()
    .subscribe((data:any)=>{
      console.log(data)
      this.allGroups=data
    })
  }
   //api call for updating existing contact,arg:updatedContact,contactId
   updateContact(){
    this.api.updateContact(this.contactId,this.contact).subscribe((data:any)=>{
      this.router.navigateByUrl("")
    })
  }
}
