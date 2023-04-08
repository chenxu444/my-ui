import { ref } from 'vue'
export function useStars(activeNum, callback) {
    const active = ref(activeNum)
    const setStartNum = (starIndex) => {
        active.value = starIndex
        callback && callback()
    }
    return [active, setStartNum]

}