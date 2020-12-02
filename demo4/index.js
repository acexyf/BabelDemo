import '@babel/polyfill'

[1, 5, 10, 15].filter(function(value) {
  return value > 9;
})

let promise = new Promise((resolve, reject)=>{
    resolve(1)
})
