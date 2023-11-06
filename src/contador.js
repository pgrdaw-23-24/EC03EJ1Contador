var num = 0

function incrementar() {
    num++
    return num
}
 
function reset() {
    num = 0
    return num
}

export { incrementar, reset }