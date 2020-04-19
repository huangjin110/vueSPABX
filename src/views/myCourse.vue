<template>
    <div class="myCourse">
        我的课程
        <router-view></router-view>
        <div>
        <router-link to="/center">个人中心</router-link>
        <router-link to="/myCourse">我的课程</router-link>
        <router-link to="/choseCourse">选课</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>