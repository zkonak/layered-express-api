
class PrescriptiionEntity {
    
    constructor({id,dosage,consultationId,drugId}) {
        this.id = id;
        this.dosage=dosage;
        this.consultationId = consultationId;
        this.drugId = drugId;
        
    }

    // validate() {
    //     if (!this.email || !this.password)
    //         return false;
    //     else
    //         return true;
    // }

}

export default PrescriptiionEntity;