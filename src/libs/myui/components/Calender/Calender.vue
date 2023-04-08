<template>
    <div>
        111
    </div>
</template>

<script>
import {getFirstWeekDay,getLastMonthRestDays} from './calender'
export default{
    name:'Calender',
    setup(){
        console.log(getLastMonthRestDays(2022,7));
    }
}

</script>

<style lang="scss" scoped>

</style>