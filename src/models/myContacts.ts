export class MyContact{
    id?:string
    name?:string
    address?:Array<{
    street?:string
    suite?:string
    city?:string
    }>=[]
    email?:string
    photo?:string
    mobile?:string
    company?:string
    title?:string
    groupId?:string
  
}