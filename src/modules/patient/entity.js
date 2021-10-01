
class PatientEntity {
    
    constructor({id,email,password,name,serviceId}) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.serviceId=serviceId;
    }

    // validate() {
    //     if (!this.email || !this.password)
    //         return false;
    //     else
    //         return true;
    // }

}

export default PatientEntity;