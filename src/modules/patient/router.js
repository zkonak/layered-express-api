class PatientRouter {

    constructor(router, auth, patientController) {
        this.router = router;
        this.initializeRoutes(patientController, auth);
        return this.router;
    }

    initializeRoutes(patientController, auth) {
        this.router.route('/patient')
            .get(patientController.getAll)
            .post(patientController.register);

        
    }
}

export default PatientRouter;