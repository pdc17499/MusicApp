export const convertTime = (time) => {
    return time >= 10? time : `0${time}` 
}