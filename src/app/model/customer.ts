import {CustomerStatus} from './customer_status';
import {Note} from './note';


export class Customer {
  id:number;
  name:string;
  email:string;
  phone:string;
  status:CustomerStatus;
  creation_date:JSON;
  notes:Note[]

}