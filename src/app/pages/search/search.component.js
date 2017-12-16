const SearchController = function (userService) {
    this.user = [];

    this.$routerOnActivate = function (next, previous) {
        let textSearched = next.params.textSearched;
        return userService.get({ login: textSearched }, (user) => {
            this.user = user;
        });
    }
};

const searchComponent = {
    template: require('./search.component.html'),
    controller: ['userService', SearchController]
};

export default searchComponent;