const UserService = ($resource) => {

    return $resource(
        'https://api.github.com/users/:login'
        
    );
};

export default UserService;