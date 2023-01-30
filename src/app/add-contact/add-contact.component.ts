import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyContact } from 'src/models/myContacts';
import { myGroup } from 'src/models/myGroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit{

  allgroup:myGroup[]=[]
  contactName:string=""
  contact:MyContact={} as MyContact 
  constructor(private api:ApiService,private router:Router){}

  ngOnInit(): void {
    this.api.getAllGroups().subscribe((data:any)=>{
      console.log(data);
      this.allgroup=data
    })
  
   
  }
  addContact(){
      this.api.addContact(this.contact)
      .subscribe((data:any)=>{
      this.router.navigateByUrl('/')
      })
  }
  }
