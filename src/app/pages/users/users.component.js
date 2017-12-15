const UsersController = function (userService) {
    this.users = [];

    userService.getUsers({}).$promise.then((response) => {
        this.users = response.data;
    });
};

const UsersComponent = {
    template: require('./users.component.html'),
    controller: ['userService', UsersController]
};

export default UsersComponent;