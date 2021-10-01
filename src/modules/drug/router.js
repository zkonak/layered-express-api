class DrugRouter {

    constructor(router, auth, drugController) {
        this.router = router;
        this.initializeRoutes(drugController, auth);
        return this.router;
    }

    initializeRoutes(drugController, auth) {
        this.router.route('/drug')
            .get(drugController.getAll)
            .post(drugController.register);


    }
}

export default DrugRouter;