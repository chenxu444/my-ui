<template>
    <div v-magnifier class="img_wrap" :style="{
        width: imgWidth + 'px',
        height: imgHeight + 'px'
    }">
        <a class="mag_wrap" :href="link" :target="blank ? true : ''" :style="{ width: magWidth + 'px', height: magHeight + 'px' }">
            
            <img :src="imgUrl" :alt="imgAlt" class="mag_img" :style="{
        width: imgWidth + 'px',
        height: imgHeight + 'px'
    }">
        </a>
        <a :href="link">
            <img :src="imgUrl" :alt="imgAlt" class="static_img" >
        </a>
    </div>
</template>

<script>
import magnifier from './magnifier'
export default {
    name: 'Magnifier',
    directives:{
        magnifier
    },
    props:{
        imgUrl:{
            type:String,
            default:''
        },imgWidth:{
            type:Number,
            default:375
        },
        imgHeight:{
            type:Number,
            default:500
        },
        magHeight:{
            type:Number,
            default:100
        },
        magWidth:{
            type:Number,
            default:100
        },
    
        blank:{
            type:Boolean,
            default:false
        },
        imgAlt:{
            type:String,
            default:'放大镜'
        },
        link:{
            type:String,
            default:''
        }
    }

}


</script>

<style lang="scss" scoped>
.img_wrap {
    position: relative;
    box-shadow: 0 0 5px #999;
    border: 1px solid #ddd;

}
.static_img{
    width: 100%;
    height: 100%;
}

.mag_wrap{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 0 0 5px #ccc;
    cursor: move;
    overflow: hidden;
    &.show{
        display: block;
        transform: scale(1.5);
    }
    .mag_img{
        position: absolute;
        top: 0;
        left: 0;
    }
}
</style>