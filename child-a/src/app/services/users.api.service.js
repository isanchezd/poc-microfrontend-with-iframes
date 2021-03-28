
const API_PATH = 'user';

const UsersApiService = {
    async getUsers() {
        const response = await fetch(`${process.env.REACT_APP_API_URL}${API_PATH}`, {
            method: 'GET',
            headers: {
                'app-id': process.env.REACT_APP_APP_ID
            }
        });
        return await response.json();
    }
}

export default UsersApiService;