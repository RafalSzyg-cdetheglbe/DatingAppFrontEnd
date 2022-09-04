import { Match } from "src/app/matches/model/match";
import { User } from "src/app/user/model/user";

export class Message {
    id!:number;
    match!:Match;
    user!:User;
    content!:String;
    sendDate!:Date;
}
