class DoctorRouter {

    constructor(router, auth, doctorController) {
        this.router = router;
        this.initializeRoutes(doctorController, auth);
        return this.router;
    }

    initializeRoutes(doctorController, auth) {
        this.router.route('/doctor')
            .get(doctorController.getAll)
            .post(doctorController.register);

        this.router.route('/doctor/authenticate').post(doctorController.login);
    }
}

export default DoctorRouter;