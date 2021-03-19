
const API_PATH = 'user';

export default class UsersApiService {
    getUsers() {
        return fetch(`${process.env.REACT_APP_API_URL}${API_PATH}`, {
            method: 'GET',
            headers: {
                'app-id': '605508972a2e4f35db3423de'
            }
        })
        .then(response => response.json())
    }
}