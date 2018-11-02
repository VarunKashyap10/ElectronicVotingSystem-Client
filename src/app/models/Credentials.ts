export class Credentials{
    
    constructor(public userID:String, public password:String, public userType:String, public userStatus:number){
    }

    toString():String{
        return " Uname - "+this.userID+" | Password "+this.password+" | utype "+this.userType;
    }
}