
class ServiceEntity {
    
    constructor({id, name, localisation,specialite}) {
        this.id = id;
        this.name = name;
        this.localisation = localisation;
        this.specialite=this.specialite;
    }

    // validate() {
    //     if (!this.email || !this.password)
    //         return false;
    //     else
    //         return true;
    // }

}

export default ServiceEntity;