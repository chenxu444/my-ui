<template>
    <div :class="{
        'header-wrap':true,
        'header-wrap-h':isHidden,
        'header-fixed':toggleHead,
        'header-bg':isOpen
    }">
        <a class="head-index ">
            <img src="https://upload.dongfeng-nissan.com.cn/static/nissan-website/image/common/logo/logo.png" alt="">
        </a>
        <div class="head-right">
            <img class="head-logo" src="https://img.dongfeng-nissan.com.cn/resources/nissan-website/images/common/logo-txt.png" alt="">
            <button :class="{'head-icon':true,'head-open':isOpen}" @click="openHead">
                <span class="san-line">
                    <i class="aline"></i>
                </span>
            </button>
        </div>
        <div :class="{
                'aside':true,
                'aside-active':isOpen,
            }">
            <div class='aside-nav' :class=" isOpen?'aside-mobile':''">111</div>
        </div>
    </div>
    <img src="https://upload.dongfeng-nissan.com.cn/nissan/image/202303/d62fefb0-be6a-11ed-be7c-c3bb8063c7f2.jpg" alt="">
</template>

<script setup>
import { ref } from 'vue';
import {deBounce} from '@/utils/utils'
const swiperArr = [
    'https://upload.dongfeng-nissan.com.cn/nissan/image/202303/f7608040-cfaa-11ed-b139-0db4eef664ab.jpg',
    'https://upload.dongfeng-nissan.com.cn/nissan/image/202212/ee15b9a0-88b6-11ed-8f58-31ecb1f197f8.jpg',
    'https://upload.dongfeng-nissan.com.cn/nissan/image/202209/e80e6bb0-33c0-11ed-bbad-e3cf1680792e.jpg',
    'https://upload.dongfeng-nissan.com.cn/nissan/image/202301/761b5900-947d-11ed-b14c-6b3e14ba1f5b.jpg',
    'https://upload.dongfeng-nissan.com.cn/nissan/image/202303/92dd2700-c207-11ed-93b6-77621a533e99.jpg'
]
let isOpen = ref(false)
let toggleHead = ref(false)
let isHidden = ref(false)
let nowScrollY = ref(0)
const openHead = () => {
    isOpen.value  = !isOpen.value
}
console.log(window.screen.availWidth,window.innerHeight);
const scrollWatch = (e) =>{
    window.scrollY > 20 ? isHidden.value = true : isHidden.value = false
    if(window.scrollY > nowScrollY.value){ // 向下滚动
        toggleHead.value = false
    }else{
        // 向上滑动
        isHidden.value ? toggleHead.value = true : toggleHead.value = false
    }
    nowScrollY.value = window.scrollY
    
}
window.addEventListener('scroll',deBounce(scrollWatch))

</script>

<style lang="scss" scoped>

.header-wrap{
    position: absolute;
    top: 0;
    width: 100%;
    height: 7.813vw;
    box-sizing: border-box;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    padding: 0 1.302vw;
    align-items: center;
    transition: height .3s;
}
.header-wrap-h{
    position: fixed;
    width: 100%;
    top: -70px;
}
.header-fixed{
    width: 100%;
    position: fixed;
    top: 0;
    background-color: rgba(0, 0, 0, .5);
    height: 70px;
    transition: top .3s;

}
.head-index{
    display: block;
    width: 10.417vw;
    height: 74%;
    img{
        width: auto;
        max-height: 100%;
    }
}
.head-logo{
    height: 74%;
    width: auto;
    margin-right: 20px;
}
.head-icon{
    width: 6.25vw;
    height: 7.813vw;
    background: none;
    border: none;
    outline: 0;
    .san-line{
        z-index: 999;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        width: 30px;
        height: 26px;
        display: flex;
        margin: 0 auto;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .aline{
            display: inline-block;
            width: 100%;
            height: 2px;
            background-color: #fff;
            transition: .3s;
        }
    }
    .san-line::before,
    .san-line::after{
        position: absolute;
        display: block;
        content: '';
        width: 100%;
        height: 2px;
        transition: .3s;
        background-color: #fff;
    }
    .san-line::after{
        bottom: 0;
    }
    .san-line::before{
        top: 0;
    }
}
.head-open{
    .aline{
        opacity: 0;
    }
    .san-line::after{
        bottom:13px ;
        right: 2px;
        transform: rotate(-45deg);
        background-color: #999;
    }
    .san-line::before{
        top: 11px;
        right: 2px;
        background-color: #999;
        transform: rotate(45deg);
    }
}
.head-right{
    height: 100%;
    display: flex;
    align-items: center;
}


// aside
.aside{
    position: fixed;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, .8);
    transition:  opacity .3s ease-in;
    
    .aside-nav{
        position: fixed;
        padding: 30px;
        width: 30%;
        bottom: 0;
        top: 0;
        left: 100%;
        background-color: #fff;
        z-index: 10;
        transition:  left .3s ease-in;
    }
}
.aside-active{
    opacity: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .aside-nav{
        left: 70%;
    }
}
@media screen and( max-width:767px) {

    .header-wrap{
        padding: 0.521vw 0;
        height: 15vw;
    }
    .head-icon{
        width: 13vw;
    }
    .head-logo{
        height: 13.667vw;

    }
    .head-index{
        height: 10.667vw;
    }
    .aside .aside-nav{
        width: 100%;
        top: 15vw;
        bottom: 0;
        left: 100%;
        right: 0;
    }
    .aside-active{
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: transparent;
        .aside-nav{
            left: 0;
        }
    }
    .header-bg{
        background: url('https://upload.dongfeng-nissan.com.cn/static/nissan-website/image/common/header/nav-bg-m.jpg') 50%/cover no-repeat;
    }
}
</style>