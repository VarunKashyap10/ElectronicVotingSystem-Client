export class Profile{
    userID:String;
	firstName:String;
	lastName:String;
	gender:String;
	dateOfBirth:String; 
	city:String;
	street:String;
	location:String;
	state:String;
	pincode:String;
	mobileNo:String;
	emailID:String;
    password:String;
    constructor(firstname:String,lastname:String,gender:String,dob:String,city:String,street:String,location:String,
        state:String, pincode:String,mobile:String,email:String,password:String){
            this.userID="";
            this.firstName=firstname;
            this.lastName=lastname;
            this.gender=gender;
            this.dateOfBirth=dob;
            this.city=city;
            this.street=street;
            this.location=location;
            this.state=state;
            this.pincode=pincode;
            this.mobileNo=mobile;
            this.emailID=email;
            this.password=password;
    }

    toString():String{
        return "UID - "+this.userID+" | Name - "+this.firstName+" "+this.lastName;
    }
}