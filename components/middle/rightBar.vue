<template>
    <div v-if="!isExtend" class="right-bar"></div>
</template>
<script>
export default {
    computed:{
        isExtend(){
            return this.$store.state.article.isExtendPost
        } 
    }
}
</script>