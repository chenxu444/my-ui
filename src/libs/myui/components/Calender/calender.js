function getFirstWeekDay(year,month){ // 判断当年当月1号是星期几
    const date = new Date(year,month-1,1)  // 传入的month是当月，Date内需要当月索引
    return date.getDay()
}
function getMonthDayCount(year,month){ // 获取当月天数 即本月最后一天
    const date = new Date(year,month,0)   // 0 代表上个月最后一天，即month不需要-1
    return date.getDate()
}
function getLastMonthRestDays(year,month){  // 获取上个月在当前页剩余的天数   28 29 30  1 2 3 4
    const days = getFirstWeekDay(year,month)  // 根据1号是周几判断 上月剩余几天
    let lastDay = getMonthDayCount(year,month-1)
    const restDays = []
    while(restDays.length < days){
        restDays.unshift(lastDay--)
    }
    return restDays
}
function getNextMonthRestDays(year,month){ // 获取当月结束次月剩余天数
    const lastMonthRestDays = getLastMonthRestDays(year,month)
    const currentMonthDayCount = getMonthDayCount(year,month)
    const nextMonthRestDays = 42 - lastMonthRestDays -currentMonthDayCount
    const restDays = []
    for(let i = 1; i<= nextMonthRestDays;i++){
        restDays.push(i)
    }
    return restDays
}
function getDateInfo(timeStamp) {
    let date = timeStamp ? new Date(timeStamp) : new Date()
    return [
        date.getFullYear(),
        date.getMonth + 1 ,
        date.getDate()
    ]
}
function getFormatDate(year,month,date) {
    let dateArr = [year,month,date]
    for (let i = 1; i < dateArr; i++){
        dateArr[i] < 10 && (dateArr[i] = '0' + dateArr[i]) 
    }
    return dateArr.join('-')
}
export{
    getFirstWeekDay,
    getMonthDayCount,
    getLastMonthRestDays,
    getFormatDate,
    getDateInfo,
    getNextMonthRestDays
}