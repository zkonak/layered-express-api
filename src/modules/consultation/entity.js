
class ConsultationEntity {
    
    constructor({id,doctorId,patientId}) {
        this.id = id;
       
        this.doctorId = doctorId;
        this.patientId = patientId;
        
    }

    // validate() {
    //     if (!this.email || !this.password)
    //         return false;
    //     else
    //         return true;
    // }

}

export default ConsultationEntity;