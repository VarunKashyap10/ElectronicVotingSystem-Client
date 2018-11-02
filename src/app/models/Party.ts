export class Party{
    partyID:String;
    name:String;
    leader:String;
    symbol:String;
    constructor(    partyID:String,
        name:String,
        leader:String,
        symbol:String){
            this.partyID=partyID;
            this.name=name;
            this.leader=leader;
            this.symbol=symbol;
    }
}