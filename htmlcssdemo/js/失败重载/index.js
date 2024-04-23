
function request() {
    return new Promise((resolve, reject) => {
        // 随机数模拟请求成功与失败
        let num = Math.random() * 5;

        if (num > 3) {
            resolve("成功")
        } else {
            reject("失败")
        }
    })
}

function reload(fn, n) {
    // fn:请求函数，n:重试次数
    return new Promise(async (reslove, reject) => {
        // 限定次数完还没请求成功就不再执行
        while (n--) {

            try {
                let res = await fn();
                reslove("请求成功", res)
                // 请求成功就直接跳出循环不再执行
                break;
            } catch (err) {
                if (n <= 0) {
                    reject("次数用完仍然没请求成功")
                }
            }

        }
    })
}

reload(request, 3)
.then(res =>{
    console.log(res)
})
.catch(err =>{
    console.log(err)
})

function getData(){
    return axios.get("http://xxxx")
}

reload(getData, 3)
.then(res =>{
    console.log(res)
})
.catch(err =>{
    console.log(err)
})