class DrugController {

    constructor(drugService, jwtService) {
        this.drugService = drugService;
        this.jwtService = jwtService;
    }

    getAll = async ({res, next}) => {
        try {
            let drugs = await this.drugService.getAll();
            res.status(200).json(drugs);
        } catch (err) {
            next(err);
        }
    }

    register = async (req, res, next) => {
        try {
            const drug = await this.drugService.register({...req.body});
            res.status(201).json(drug);
        }
        catch (err) {
            next(err);
        }
    }

   
}

export default DrugController;