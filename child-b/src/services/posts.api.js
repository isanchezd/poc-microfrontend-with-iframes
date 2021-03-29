const API_PATH = 'post';

const PostsApi = {
    async getposts() {
        const response = await fetch(`${process.env.VUE_APP_API_URL}${API_PATH}`, {
            method: 'GET',
            headers: {
                'app-id': process.env.VUE_APP_APP_ID
            }
        });
        return await response.json();
    }
}

export default PostsApi;