<template>
  <table className="table table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Description</th>
        <th scope="col">Link</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(post, i) in posts" :key="i">
       <td>{{ post.id }}</td>
       <td>{{ post.text }}</td> 
       <td>{{ post.link }}</td>
       <td><button type="button" class="btn btn-danger" v-on:click="deletePost(i)">Delete</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Posts from "./../services/posts";

export default {
  name: "Posts",
  data: () => {
    return {
      posts: []
    }
  },
  methods: {
    deletePost(id)  {
      const posts = this.posts.users.filter(post => post.id !== id);
      const postToDelete = this.posts.users.find(post => post.id === id);
      this.props.posts = posts;
      window.parent.postMessage({
        action: 'DELETED_POST',
        user: postToDelete
      }, '*');
    },
  },
  created()  {
    Posts.getUsers()
      .then(posts => (this.posts = posts));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
