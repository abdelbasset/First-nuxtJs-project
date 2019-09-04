<template>
    <section>
        <PostPreview
        id="1"
        thumbnail="https://702rc195vu6fsa4x3pnb6d8m-wpengine.netdna-ssl.com/wp-content/uploads/2019/03/AI-circuit-board-tech-16.9.jpg"
        title="Hello There"
        textPreview="Hello Preview test"
      />
      <PostPreview
        id="2"
        thumbnail="https://702rc195vu6fsa4x3pnb6d8m-wpengine.netdna-ssl.com/wp-content/uploads/2019/03/AI-circuit-board-tech-16.9.jpg"
        title="Hello There 2"
        textPreview="Hello Preview test"
      />
      <PostPreview
        id="3"
        thumbnail="https://702rc195vu6fsa4x3pnb6d8m-wpengine.netdna-ssl.com/wp-content/uploads/2019/03/AI-circuit-board-tech-16.9.jpg"
        title="Hello There 3"
        textPreview="Hello Preview test"
      />
    </section>
</template>
<script>
import PostPreview from '@/components/Posts/PostPreview';
export default {
    components:{
        PostPreview
    }
    
}
</script>