export class Election{
    electionID:String;
	name:String;
	electionDate:String;
	district:String;
	constituency:String;
    countingDate:String;
    constructor(name:String,edate:String,dist:String,cons:String,cdate:String){
        this.name=name;
        this.electionDate=edate;
        this.district=dist;
        this.constituency=cons;
        this.countingDate=cdate;
    }
    toString():String{
        return "ElectionName"+this.name+" | ElectionDate "+this.electionDate;
    }
}