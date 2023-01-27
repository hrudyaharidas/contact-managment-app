import { Component, OnInit } from '@angular/core';
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
  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.getAllGroups().subscribe((data:any)=>{
      console.log(data);
      this.allgroup=data
    })
  
   
  }
  addContact(){
      
  }
  }
