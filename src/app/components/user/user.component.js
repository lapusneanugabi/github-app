let UserComponent = {
    template: require('./user.component.html'),
    bindings: {
        data: '<'
    },
    controller: function () { 
        var ctrl = this;
    }
};

export default UserComponent;