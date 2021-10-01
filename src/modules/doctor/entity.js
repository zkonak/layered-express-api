
class DoctorEntity {
    
    constructor({id, email, password,name}) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name=this.name;
    }

    validate() {
        if (!this.email || !this.password)
            return false;
        else
            return true;
    }

}

export default DoctorEntity;