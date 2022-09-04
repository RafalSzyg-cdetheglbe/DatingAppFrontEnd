import { GenderInterest } from "src/app/genderInterest/model/gender-interest";
import { UserRole } from "src/app/userRole/model/user-role";

export class User {
 id!: number;
 firstName!:String;
 lastName!:String;
 age!:number;
 email!:String;
 password!:String;
 userRole!:UserRole;
 genderInterest!:GenderInterest
 isDeleted!:Boolean
}
