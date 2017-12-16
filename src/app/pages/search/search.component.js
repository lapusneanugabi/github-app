const SearchController = function (userService) {
    this.user = {};
    this.textSearched = "";
    this.isLoaded = false;

    this.$routerOnActivate = function (next, previous) {
        this.textSearched = next.params.textSearched;
        return userService.get({ login: this.textSearched }, (user) => {
            this.user = user;
            this.isLoaded = true;
        }, (error) => {
            // error handler
            this.isLoaded = true;
        })
    }
};

const searchComponent = {
    template: require('./search.component.html'),
    controller: ['userService', SearchController]
};

export default searchComponent;