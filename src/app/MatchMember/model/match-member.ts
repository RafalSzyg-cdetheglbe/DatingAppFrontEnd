import { Match } from "src/app/matches/model/match";
import { User } from "src/app/user/model/user";

export class MatchMember {
    userId:User;
    matchId:Match;
    isDeleted:boolean;
}
