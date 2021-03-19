import UsersApiService from './users.api.service';

export default class UsersService {

    userApiService;

    constructor() {
        this.userApiService = new UsersApiService();
    }

    getUsers() {
        return new Promise((resolve, reject) => {
            this.userApiService.getUsers()
            .then(response => resolve(response.data), reject);
        })  
    }
}