const UserDetailsController = function (userService) {
    this.user;
    this.isLoaded = false;
    this.login = "";

    this.$routerOnActivate = function (next, previous) {
        this.login = next.params.login;
         userService.get({ login: this.login }, (user) => {
            this.user = user;
            this.isLoaded = true;
        },  (error) => {
            // error handler
            this.isLoaded = true;
        });
    }
};

const UserDetailsComponent = {
    template: require('./user-details.component.html'),
    controller: ['userService', UserDetailsController]
};

export default UserDetailsComponent;