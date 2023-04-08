<template>
    <div class="loading-wrap">
        <div class="g-container">
            <div class="g-number">98.90%</div>
            <div class="g-constrast">
                <div class="g-circle"></div>
                <ul class="g-bubbles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.loading-wrap{
    background-color: #000;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.g-number{
    position: absolute;
    width: 300px;
    top: 27%;
    color: #fff;
    text-align: center;
    font-size: 32px;
    z-index: 10;
}
.g-container{
    position: relative;
    height: 600px;
    width: 300px;
    top: 50%;
    transform: translateY(-50%);
    margin: auto;
}
.g-constrast{
    filter: contrast(10) hue-rotate(0);
    width: 300px;
    height: 500px;
    background-color: #000;
    overflow: hidden;
    animation: hueRotate 10s infinite linear; 
}
.g-circle{
    position: relative;
    width: 300px;
    height: 300px;
    box-sizing: border-box;
    filter: blur(8px);
    &::before{
        content: '';
        position: absolute;
        width: 176px;
        height: 176px;
        top: 40%;
        left: 50%;
        transform: translate(-50%,-50%);
        border-radius: 50%;
        background-color: #000;
        z-index: 20;
    }
    &::after{
        content: '';
        position: absolute;
        width: 200px;
        height: 200px;
        top: 40%;
        left: 50%;
        transform: translate(-50%,-50%) rotate(0);
        border-radius: 50%;
        background-color: #00ff6f;
        z-index: 10;
        border-radius: 42% 38% 62% 49% / 45%;
        animation: rotate 10s infinite linear;
    }
    
}
.g-bubbles{
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    bottom: 0;
    width: 150px;
    border-radius: 10px 10px 0 0 ;
    height: 40px;
    background: #00ff6f;
    filter: blur(6px);
    li{
        position: absolute;
        border-radius: 50%;
        background: #00ff6f;

    }
    @for $i from 0 through 15{
        li:nth-child(#{$i}){
            $width:15 + random($limit: 15) + px;
            left: 40 + random($limit: 50) + px;
            width: $width;
            height: $width;
            top: 50%;
            transform: translate(-50%,-50%);
            animation: moveToTop #{random(6) + 3}s ease-in-out -#{random(5000 ) / 1000}s infinite;
        }
    }
}
@keyframes rotate {
    50%{
        border-radius: 45% / 42% 38% 58% 49%;
    }
    100%{
        transform: translate(-50%,-50%) rotate(720deg);
    }
    
}
@keyframes moveToTop {
    90%{
        opacity: 1;
    }
    100%{
        opacity: .1;
        transform: translate(-50%,-260px);

    }
}
@keyframes hueRotate {
    100%{
        filter: contrast(15) hue-rotate(360deg);
    }
    
}
</style>