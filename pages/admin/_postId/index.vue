<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>
<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";

export default {
  components: {
    AdminPostForm
  },
  data() {
    return {
      loadedPost: {
        author: "Ab",
        title: "My awesome Post",
        content: "Super Amazing, Thanks for that!",
        thumbnailLink:
          "https://702rc195vu6fsa4x3pnb6d8m-wpengine.netdna-ssl.com/wp-content/uploads/2019/03/AI-circuit-board-tech-16.9.jpg"
      }
    };
  }
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>