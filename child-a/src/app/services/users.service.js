import UsersApiService from './users.api.service';

const UsersService = {
    async getUsers() {
        const promise = new Promise((resolve, reject) => {
            UsersApiService.getUsers()
            .then(response => resolve(response.data), reject);
        });
        return await promise;
    }
}

export default UsersService;