import PostsApi from "./posts.api";

const Posts = {
    async getUsers() {
        const promise = new Promise((resolve, reject) => {
            PostsApi.getposts()
            .then(response => { 
                const posts = response.data.map(post => Posts.mapPosts(post));
                resolve(posts); 
            })
            .catch(reject);
        });
        return await promise;
    },

    mapPosts(post) {
        return {
            id: new Date().getTime(),
            ...post
        }
    }
}

export default Posts;