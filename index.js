// code your solution here

function saturdayFun(activity= 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun();
saturdayFun('bathe my dog')

const mondayWork = function (ToDo = 'go to the office'){
    return `This Monday, I will ${ToDo}.`
}
mondayWork()
mondayWork('work from home.')

function wrapAdjective (symbol = '*'){
    return function (adjective='special'){
        return `You are ${symbol}${adjective}${symbol}!`
    }

}
const wrapStars = wrapAdjective()
const wrapBars = wrapAdjective('||')
