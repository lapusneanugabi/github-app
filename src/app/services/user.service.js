const UserService = ($resource) => {

    return $resource(
        'https://api.github.com/users',
        {
        },
        {
            getUsers: {
                method: "JSONP",
                isArray: false
            }
        }
    );
};

export default UserService;