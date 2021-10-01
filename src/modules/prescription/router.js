class PrescriptionRouter {

    constructor(router, auth, prescriptionController) {
        this.router = router;
        this.initializeRoutes(prescriptionController, auth);
        return this.router;
    }

    initializeRoutes(prescriptionController, auth) {
        this.router.route('/prescription')
            .get(prescriptionController.getAll)
            .post(prescriptionController.register);

      
    }
}

export default PrescriptionRouter;