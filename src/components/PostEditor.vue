<template>
  <form @submit.prevent.="addPost" @keyup.enter="addPost" >
        <div class="form-group">
            <textarea v-model="newPostText"  name="" id="" cols="30" rows="10" class="form-input"/>
        </div>
        <div class="form-actions">
            <button class="btn-blue"  >Submit post</button>
        </div> 


    </form>
</template>

<script>
import sourceData from '@/data.json'
export default {
    data() {
        return {
            threads: sourceData.threads,
            posts: sourceData.posts ,
            newPostText: ''
            // users: sourceData.users
        }
    },
     methods:{
        
        addPost() {
            const postId = 'qqqq' + Math.random()
            const post = {
                id: postId,
                threadId: this.id,
                userId: "FsCDAk9w8NeXEceLV87arpsXjnQ2",
                text: this.newPostText,
                publishedAt: Math.floor(  Date.now() / 1000),

            }
            this.posts.push(post)
            this.$emit('save-post', { post })
            this.thread.post.push(postId)
            this.newPostText = ' '
        }
    }

}
</script>

<style>

</style>