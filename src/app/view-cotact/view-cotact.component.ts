import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { myGroup } from 'src/models/myGroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-cotact',
  templateUrl: './view-cotact.component.html',
  styleUrls: ['./view-cotact.component.css']
})
export class ViewCotactComponent implements OnInit {

     contactId:string=""
     contact:any
     groupName:any
     groupId:any
    constructor(private activatedRoute:ActivatedRoute,private api:ApiService){}
  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe((data:any)=>{
      this.contactId=data.contactId
    })

    //api call to view particular contact 
    this.api.viewContact(this.contactId)
    .subscribe((data:any)=>{
      this.contact=data
      this.groupId=data.groupId
      console.log(this.groupId);
      
       //api call to get groupName
    
   this.api.getGroupName(this.groupId)
   .subscribe((result:any)=>{
    this.groupName=result.name
    console.log(result);
   })
    })

   
  }
}
