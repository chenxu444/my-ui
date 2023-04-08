<template>
    <div class="loading">
        <div class="circle"></div>
        <div>Loading</div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.loading{
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    text-align: center;
    font-weight: bold;
    width: 100vw;
    height: 100vh;
    line-height: 100vh;
}
.circle{
    position: absolute;
    top: 0;
    left: 0;    
    right: 0;
    bottom: 0;
    margin: auto;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 10px solid transparent;
    border-top: 10px solid rgba(8, 42, 135, 0.788);
    border-right: 10px solid rgba(8, 42, 135, 0.788);
    border-bottom: 10px solid rgba(8, 42, 135, 0.788);
    filter: contrast(10) hue-rotate(0);
    
    animation: star-roate 2s infinite linear;
}
@keyframes star-roate {
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
        filter: contrast(15) hue-rotate(360deg);
    }
}
</style>