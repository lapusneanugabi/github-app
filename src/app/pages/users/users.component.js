const UsersController = function (userService) {
    this.users = [];

    userService.query((users) => {
        this.users = users;
    });
};

const UsersComponent = {
    template: require('./users.component.html'),
    controller: ['userService', UsersController]
};

export default UsersComponent;