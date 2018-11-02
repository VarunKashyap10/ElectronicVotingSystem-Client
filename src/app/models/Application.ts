export class Application{
    userID:String;
    constituency:String;
    passedStatus:String;
    approvedStatus:String;
    voterID:String;
    constructor(    userID:String,
        constituency:String,
        passedStatus:String,
        approvedStatus:String,
        voterID:String){
            this.userID=userID;
            this.constituency=constituency;
            this.passedStatus=passedStatus;
            this.approvedStatus=approvedStatus;
            this.voterID=voterID;
    }
}