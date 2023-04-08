<template>
    <div  :class="['container-wrapper',isSun?'':'container-night']">
        <h1 :class="[isSun?'':'stext-color']">Good,Morning，GoodNight</h1>
        <p :class="['subtitle',isSun?'':'text-color']">clikc on the sun or moon for animation</p>
        <div class="container">
            <div class="circle-container">
                <div class="sky">
                    <!-- 晚上部分 -->
                    <div :class="['sky-night',isSun?'':'sky-night-fade']">
                        <div class="stars" :class="isSun?'':'stars-fade'">
                            <div class="shooting-star" :class="isSun?'':'shooting'"></div>
                            <div class="stars-group-1"></div>
                            <div class="stars-group-2"></div>
                            <div class="stars-group-3"></div>
                            <div class="stars-group-4"></div>
                        </div>
                    </div>
                    <!-- 云彩 -->
                    <div class="cloud cloud-1"></div>
                    <div class="cloud cloud-2"></div>
                    <div class="cloud cloud-3"></div>
                    <div class="cloud cloud-4"></div>
                    <div class="cloud cloud-5"></div>
                    <div class="cloud cloud-6"></div>

                    <!-- 飞鸟 -->
                    <div class="bird bird-1" :class="isSun?'':'bird-fly'"></div>
                    <div class="bird bird-2" :class="isSun?'':'bird-fly'"></div>
                    <div class="bird bird-3" :class="isSun?'':'bird-fly'"></div>
                </div>
                <!-- 山川 -->
                <div class="mountains">
                    <div class="mountain-back" :class="isSun?'':'mountain-back-night'">
                        <div class="mountain-back-1" :class="isSun?'':'mountain-back-night'"></div>
                        <div class="mountain-back-2" :class="isSun?'':'mountain-back-night'"></div>
                    </div>
                    <div class="mountain-middle" :class="isSun?'':'mountain-middle-night'">
                        <div class="mountain-middle-1" :class="isSun?'':'mountain-middle-night'"></div>
                        <div class="mountain-middle-2" :class="isSun?'':'mountain-middle-night'"></div>
                    </div>
                    <div class="mountain-top" :class="isSun?'':'mountain-top-night'">
                        <div class="mountain-top-1" :class="isSun?'':'mountain-top-night'"></div>
                    </div>
                </div>
                <!-- 太阳 -->
                <div class="sun-container">
                    <div class="sun" @click="toggleTime"></div>
                </div>
                <!-- 海洋 -->
                <div :class="['ocean',isSun?'':'animation-stop']">
                    <div  :class="['boat',isSun?'':'boat-sali']"></div>
                    <div :class="['ocean-night',isSun?'':'ocean-night-fade']">
                        <div :class="['moon',isSun?'':'moon-fade']"></div>
                        <div class="mountains mountains-bottom">
                            <div class="mountain-back" :class="isSun?'':'mountain-back-night'">
                                <div class="mountain-back-1" :class="isSun?'':'mountain-back-night'"></div>
                                <div class="mountain-back-2" :class="isSun?'':'mountain-back-night'"></div>
                            </div>
                            <div class="mountain-middle" :class="isSun?'':'mountain-middle-night'">
                                <div class="mountain-middle-1" :class="isSun?'':'mountain-middle-night'"></div>
                                <div class="mountain-middle-2" :class="isSun?'':'mountain-middle-night'"></div>
                            </div>
                            <div class="mountain-top" :class="isSun?'':'mountain-top-night'">
                                <div class="mountain-top-1" :class="isSun?'':'mountain-top-night'"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
import { ref } from 'vue';

export default{
    name:'GoodMorning',
    setup(){
        let timmer = setTimeout(() => {
            toggleTime()
        }, 300);
        const isSun = ref(true)
        const toggleTime = () => {
            isSun.value = !isSun.value
            console.log(isSun.value);
        }
        return{
            isSun,
            toggleTime
        }
    }
}
</script>

<style lang="scss" scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
}
html{
    font-family: serif;
   
}
.container-wrapper{
    -webkit-transition: background-color 3s ease;
    -o-transition: background-color 3s ease;
    transition: background-color 3s ease;
    -webkit-transition-delay: 2s ease;
    -o-transition-delay: 2s ease;
    transition-delay: 2s ease;
    position: absolute;
    background-color: #fffcdd;
    flex-direction: column;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 999999;
}
.container{
    width: 450px;
    height: 450px;
    position: relative;
}
.container-night{
    background-color: #e4ecff;
}
.circle-container{
    width: 450px;
    height: 450px;
    -webkit-clip-path:circle(50% at 50% 50%);
    clip-path: circle(50% at 50% 50%);
    position: absolute;
    z-index: 100%;
    overflow: hidden;
}
.container-night{
    background-color: #e4ecff;
}
.sky{
    position: absolute;
    width: 100%;
    height: 55%;
    top: 0;
    background: -webkit-gradient(linear,left top, left bottom,from(#feb8b0)to(#fef9db));
    background:  -webkit-linear-gradient(#feb8b0,#fef9db);
    background:  -o-linear-gradient(#feb8b0,#fef9db);
    background:  linear-gradient(#feb8b0,#fef9db);
}
.sky-night{
    position: absolute;
    width: 100%;
    height: 100%;
    background: -webkit-gradient(linear,left top, left bottom,from(#4c3f6d)color-stop(#6c62bb)to(#93b1ed));
    background:  -webkit-linear-gradient(#4c3f6d,#6c62bb,#93b1ed);
    background:  -o-linear-gradient(#4c3f6d,#6c62bb,#93b1ed);
    background:  linear-gradient(#4c3f6d,#6c62bb,#93b1ed);
    opacity: 0;
    -webkit-transition: opacity 3s;
    -o-transition: opacity 3s;
    transition: opacity 3s;
    -webkit-transition-delay: 2s;
    -o-transition-delay: 2s;
    transition-delay: 2s;
}
.sky-night-fade{
    opacity: 1;
}
@keyframes sky-night{
    0% {
        background: -webkit-gradient(linear,left top, left bottom,from(#feb8b0)to(#fef9db));
        background:  -webkit-linear-gradient(#feb8b0,#fef9db);
        background:  linear-gradient(#feb8b0,#fef9db);
    }
    100%{
        background: -webkit-gradient(linear,left top, left bottom,from(#4c3f6d)to(#96b5ee));
        background:  -webkit-linear-gradient(#4c3f6d,#96b5ee);
        background:  linear-gradient(#4c3f6d,#96b5ee);
    }
}
.sun-container{
    z-index: 10;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 290px;
    height: 290px;
    transform-origin: center center;
    transition: all 5s ease-in-out;
}
.sun {
    position: absolute;
    height: 90px;
    width: 90px;
    border-radius: 50%;
    background:  linear-gradient(#fefefe,#fffbe8);
    cursor: pointer;
    z-index: 10;
}
.boat{
    position: absolute;
    width: 50px;
    height: 0px;
    border-top: 7px solid #bb7074;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    left: 280px;
    top: -5px;
    transform-origin: center bottom;
    animation: boat 5s infinite;
    animation-delay: 0.25s;
    transition: all 4s ease-in-out;
}
.boat-sali{
    margin-left: -350px;
}
@keyframes boat{
    0%{
         transform: rotate(1deg) translate(2px,0);
    }
    25%{
         transform: rotate(-1deg) translate(-2px,-2px);
    }
    50%{
         transform: rotate(1deg) translate(1px,0);
    }
    75%{
         transform: rotate(-1deg) translate(-1px,-2px);
    }
    100%{
         transform: rotate(1deg) translate(2px,0);
    }
}
.boat::before,
.boat::after{
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border: 0 solid transparent;
    z-index: 200;
}
.boat::before{
    bottom: 8px;
    right: -6px;
    border-right-width: 15px;
    border-left-width: 0px;
    border-bottom: 30px solid #bb7074;
}
.boat::after{
    bottom: 8px;
    right: 11px;
    border-left-width: 20px;
    border-bottom: 48px solid #bb7074;
}
.ocean{
    position: absolute;
    width: 100%;
    height: 45%;
    bottom: 0;
    background-color: #ceefe8;
    z-index: 200;
    animation: ocean-top 3s infinite;
    transition: ocean-top 3s ease;
    transition-delay: 2s;
    transform-origin: top;
}
.animation-stop{
    animation: ocean-top 3s forwards;
    height: 42%;
}
.ocean-night{
    position: relative;
    width: 100%;
    height: 100%;
    background: -webkit-gradient(linear,left top, left bottom,from(#8da6d6)to(#788cc9));
    background:  -webkit-linear-gradient(#8da6d6,#788cc9);
    background:  linear-gradient(#8da6d6,#788cc9);
    opacity: 0;
    transition: opacity 3s;
    transition-delay: 2s;
    z-index: 500;
}
.ocean-night-fade{
    opacity: 1;
}
.moon {
    position: absolute;
    height: 90px;
    width: 90px;
    border-radius: 50%;
    opacity: 0;
    left: 70px;
    margin-top: 45px;
    transition: opacity 1s ease;
    background:  linear-gradient(#fefefe,#fffbe8);
}
.moon-fade{
    opacity: .3;
    transition-delay: 4s;
}
.ocean::before,
.ocean::after{
    width: 100%;
    bottom: 0;
    content: "";
    position: absolute;
    z-index: 200;
}
.ocean::before{
    height: 75%;
    background: #baeced;
    animation: ocean-middle 3s infinite;
}
.ocean::after{
    height: 50%;
    background: #ace6f1;
    animation: ocean-bottom 2s infinite;
}
@keyframes  ocean-top{
    0%{
        transform: rotate(0deg);
    }
    25%{
        transform: rotate(-1deg);
    }
    50%{
        transform: rotate(0deg);
    }
    75%{
        transform: rotate(1deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
@keyframes  ocean-middle{
    0%{
        height: 75%;
    }
    50%{
        height: 77%;
        transform: rotate(2deg);
    }
    100%{
        height: 75%;
    }
}
@keyframes  ocean-bottom{
    0%{
        height: 50%;
    }
    50%{
        height: 52%;
        transform: rotate(-2deg);
    }
    100%{
        height: 50%;
    }
}

.bird::before,
.bird::after{
    border: 2px solid #bb7074;
    content: "";
    display: block;
    border-bottom: 0;
    width: 18px;
    height: 8px;
    z-index: 200;
    position: absolute;
}
.bird{
    position: absolute;
    animation: bird 1s infinite;
    z-index: 200;
    transition: all 2s ease-in-out;
}
.bird-fly{
    margin-left: 150px;
    margin-top: -100px;
}
.bird::before{
    left: -19px;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    border-left: 0;
    animation: wing-right 1s infinite;
    transform-origin: bottom left;
}
.bird::after{
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    border-right: 0;
    animation: wing-left 1s infinite;
    transform-origin: bottom left;
}

.bird-1{
    left: 240px;
    top: 140px;
    transform: scale(0.9) rotate(10deg);
    animation-delay: 0.4s;
}
.bird-2{
    left: 280px;
    top: 120px;
    transform: scale(0.8) rotate(-5deg);
    animation-delay: 0.2s;
}
.bird-3{
    left: 250px;
    top: 100px;
    transform: scale(1) rotate(8deg);
}
@keyframes bird {
    0%{
        transform: translate(0px,0px);
    }
    50%{
        transform: translate(2px,-3px);
    }
    100%{
        transform: translate(0px,0px);
    }
}
@keyframes wing-right {
    0%{
        transform: translate(0,0);
    }
    50%{
        transform: translate(0,5px);
    }
    100%{
        transform: translate(0,0);
    }
}
@keyframes wing-left {
    0%{
        transform: translate(0,0);
    }
    50%{
        transform: translate(0,5px);
    }
    100%{
        transform: translate(0,0);
    }
}
.mountains {
    position: absolute;
    width: 100%;
    height: 20%;
    bottom: 35%;
}
.mountain-bottom{
    opacity: .5;
    transform-origin: center;
    transform: scaleY(-1);
    top: 0;
    position: fixed;
    overflow: hidden;
    height: 31.5%;
}
.mountains div,
.mountains div::after,
.mountains div::before{
    border-radius: 50%;
    position: absolute;
    z-index: 200;
    display: block;
    content: "";

}
.mountains * {
    transition: background 3s ease;
    transition-delay: 2s;
}
.mountain-top,
.mountain-top * {
    background-color: #fffcdd;
}
.mountain-top{
    width: 200px;
    height: 90px;
    top: 18px;
    right: 0;
    margin-right: -50px;
}
.mountain-top-1{
    position: absolute;
    width: 250px;
    height: 80px;
    top: 15px;
    right: 0;
    margin-right: 150px;
}
.mountain-top-night{
    background: #614da2;
}
.mountain-middle,
.mountain-middle *{
    background: #fee1cb;
}
.mountain-middle{
    width: 180px;
    height: 120px;
    top: 12px;
    margin-left: 180px;
}
.mountain-middle-1{
    width: 200px;
    height: 100px;
    top: 3px;
    margin-left: -110px;
}
.mountain-middle-2{
    width: 220px;
    height: 150px;
    margin-left: -250px;
}
.mountain-middle-night{
    background: #614da2;
}
.mountain-back,
.mountain-back * {
    background-color: #fec696;
}
.mountain-back{
    width: 180px;
    height: 120px;
    top: 0;
}
.mountain-back-1{
    width: 200px;
    height: 100px;
    top: 3px;
    margin-left: 80px;
}
.mountain-back-2{
    width: 150px;
    height: 80px;
    margin-left: 250px;
}
.mountain-back-night{
    background: #614da2;
}
.cloud,
.cloud::after,
.cloud::before{
    background: #fff;
    position: absolute;
    z-index: 500;
}
.cloud{
    width: 65px;
    height: 12px;
    border-radius: 20px;
    animation: cloud 4s infinite;
}
@keyframes cloud {
    0%{
        transform: translate(0px,0px);
    }
    25%{
        transform: translate(2px,2px);
    }
    50%{
        transform: translate(0px,0px);
    }
    75%{
        transform: translate(-1px,-1px);
    }
    100%{
        transform: translate(0px,0px);
    }
}
.cloud::after{
    border-radius: 50%;
    height: 30px;
    left: 27px;
    top: -18px;
    width: 30px;
    display: block;
    content: "";
}
.cloud::before{
    border-radius: 50%;
    height: 20px;
    left: 12px;
    top: -11px;
    display: block;
    content: "";
    width: 20px;
}
.cloud-1{
    left: 310px;
    top: 150px;
}
.cloud-2{
    left: 280px;
    top: 150px;
    animation-delay: 0.2s;
}
.cloud-3{
    left: 410px;
    top: 190px;
    animation-delay: 0.4s;
}
.cloud-4{
    left: 160px;
    top: 120px;
    animation-delay: 0.6s;
}
.cloud-5{
    left: 60px;
    top: 170px;
    animation-delay: 0.8s;
}
.cloud-6{
    left: 0;
    top: 100px;
    animation-delay: 1s;
}

.stars *,
.stars *::before,
.stars *::after{
    display: block;
    content: "";
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
}
.stars{
    opacity: 0;
    transition: opacity 2s ease;
}
.stars-fade{
    opacity: 1;
    transition-delay: 4s;
}
.stars-group-1{
    width: 5px;
    height: 5px;
    left: 225px;
    top: 120px;
    animation: twinkle 2s infinite linear;
}
.stars-group-1::before{
    width: 4px;
    height: 4px;
    left: 50px;
    top: 18px;
    opacity: .8;
}
.stars-group-1::after{
    width: 3px;
    height: 3px;
    left: -35px;
    top: 35px;
    opacity: 1;
}
.stars-group-2{
    width: 5px;
    height: 5px;
    left: 25px;
    top: 175px;
    animation: twinkle 2s infinite linear;
}
.stars-group-2::before{
    width: 4px;
    height: 4px;
    left: 40px;
    top: 14px;
    opacity: .8;
}
.stars-group-2::after{
    width: 3px;
    height: 3px;
    left: -30px;
    top: -40px;
    opacity: 1;
}
.stars-group-3{
    width: 5px;
    height: 5px;
    left: 125px;
    top: 50px;
    animation: twinkle 2s infinite linear;
}
.stars-group-3::before{
    width: 4px;
    height: 4px;
    left: 50px;
    top: 20px;
    opacity: .8;
}
.stars-group-3::after{
    width: 3px;
    height: 3px;
    left: 90px;
    top: -20px;
    opacity: 1;
}
.stars-group-4{
    width: 5px;
    height: 5px;
    left: 300px;
    top: 100px;
    animation: twinkle 2s infinite linear;
}
.stars-group-4::before{
    width: 4px;
    height: 4px;
    left: 80px;
    top: 60px;
    opacity: .8;
}
.stars-group-4::after{
    width: 3px;
    height: 3px;
    left: 50px;
    top: -20px;
    opacity: 1;
}
@keyframes twinkle {
    0%{
        opacity: 1;
    }
    25%{
        opacity: .3;
    }
    50%{
        opacity: .8;
    }
    75%{
        opacity: .5;
    }
    100%{
        opacity: 1;
    }
}
.shooting-star{
    position: absolute;
    background: -webkit-gradient(linear,left top, left bottom,from(#feb8b0)to(#fef9db));
    background:  -webkit-linear-gradient(#feb8b0,#fef9db);
    background:  -o-linear-gradient(#feb8b0,#fef9db);
    background:  linear-gradient(#feb8b0,#fef9db);
    width: 35px;
    height: 3px;
    left: 310px;
    top: 10px;transform-origin: left;
    transform: rotate(-40deg);
}
.shooting{
    animation: shooting-star 3s forwards;
    animation-delay: 4s;
}
@keyframes shooting-star {
    100%{
        opacity: 1;
        transform: rotate(-40deg) translateX(-450px); 
    }
}
h1,p{
    color: #bb7074;
    transition: color 3s;
    transition-delay: 2s;
    text-align: center;
}
h1{
    margin: 60px 0 10px 0;
    font-size: 30px;
    position: relative;
}
p{
    font-size: 16px;
    line-height: 15px;
    margin: 40px;
    position: relative;
    opacity: .6;
}
p#subtitle{
    margin-top: 10px;
}
.text-color{
    color: #7980c8;
}
</style>