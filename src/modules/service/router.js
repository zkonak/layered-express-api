class ServiceRouter {

    constructor(router, auth, serviceController) {
        this.router = router;
        this.initializeRoutes(serviceController, auth);
        return this.router;
    }

    initializeRoutes(serviceController, auth) {
        this.router.route('/medication')
            .get(serviceController.getAll)
            .post(serviceController.register);

        
    }
}

export default ServiceRouter;