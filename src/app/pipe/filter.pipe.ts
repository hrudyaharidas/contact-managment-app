import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  //if any key is null then return original array
  transform(allContact:any [], searchKey:string,propName:string): any[] {
    const result:any=[]
    if(!allContact|| searchKey==""|| propName=="")
    {
      return allContact
    }
    //
    allContact.forEach((contact:any)=>{
     if( contact[propName].trim().toLowerCase().includes(searchKey.toLowerCase())){
      result.push(contact)
     }
    })

    return result;
  }

}
