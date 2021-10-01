class ConsultationRouter {

    constructor(router, auth, consultationController) {
        this.router = router;
        this.initializeRoutes(consultationController, auth);
        return this.router;
    }

    initializeRoutes(consultationController, auth) {
        this.router.route('/consultation')
            .get(consultationController.getAll)
            .post(consultationController.register);

      
    }
}

export default ConsultationRouter;