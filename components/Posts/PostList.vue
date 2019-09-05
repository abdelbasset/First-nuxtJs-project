<template>
  <section class="post-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail="https://702rc195vu6fsa4x3pnb6d8m-wpengine.netdna-ssl.com/wp-content/uploads/2019/03/AI-circuit-board-tech-16.9.jpg"
      title="Hello There"
      textPreview="Hello Preview test"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      thumbnail="https://702rc195vu6fsa4x3pnb6d8m-wpengine.netdna-ssl.com/wp-content/uploads/2019/03/AI-circuit-board-tech-16.9.jpg"
      title="Hello There 2"
      textPreview="Hello Preview test"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      thumbnail="https://702rc195vu6fsa4x3pnb6d8m-wpengine.netdna-ssl.com/wp-content/uploads/2019/03/AI-circuit-board-tech-16.9.jpg"
      title="Hello There 3"
      textPreview="Hello Preview test"
    />
  </section>
</template>
<script>
import PostPreview from "@/components/Posts/PostPreview";
export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
};
</script>


<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>