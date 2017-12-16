
let AppComponent = {
    template: require('./app.component.html'),
    $routeConfig: [
        { path: '/', component: 'users', name: 'Users', useAsDefault: true },
        { path: '/Search/:textSearched', component: 'search', name: 'Search' },
        { path: '/**', component: 'notfound', name: 'NotFound' }
    ],
    controller: function () {

        var ctrl = this;
        ctrl.search = null;

        ctrl.showPreSearchBar = function () {
            return ctrl.search == null;
        };

        ctrl.initiateSearch = function () {
            ctrl.search = '';
        };

        ctrl.showSearchBar = function () {
            return ctrl.search != null
        };

        ctrl.endSearch = function () {
            return ctrl.search = null;
        };
    }
};

export default AppComponent;