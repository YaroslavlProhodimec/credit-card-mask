const maskify = (cc) => {
if(cc.length < 5){
    return  cc
}
    let newStr = ''

    for (let i = 0; i < cc.length ; i++) {

        if(cc.length - 4 > i){
            newStr += '#'

        } else {
            newStr += cc[i]

        }

    }
    return newStr
}
console.log(maskify('4556364607935616'))
console.log(maskify('64607935616'))