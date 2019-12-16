/*
纯函数
*/

// slice
const arr1 = [1, 2, 3, 4, 5]

arr1.slice(0, 2)
console.log(arr1);
arr1.slice(0, 2)
console.log(arr1);


const arr2 = [1, 2, 3, 4, 5]

arr2.splice(0, 2)
console.log(arr2);
arr2.splice(0, 2)
console.log(arr2);

/*
副作用可能包含，但不限于：
更改文件
往数据库插入纪录
发送http请求
可变数据
打印/log
获取用户输入
DOM查询
访问系统状态
。。。


追求“纯”的理由：
可缓存性
可移植性
可测试
合理

*/



// 不纯
const signUp = function (attrs) {
    const user = saveUser(attrs)
    welcomeUser(user)
}

const saveUser = function (attrs) {
    const user = Db.save(attrs)
    // ...
}

const welcomeUser = function (user) {
    Email(user)
    // ...
}

// 纯函数
const signUp = function (Db, Email, attrs) {
    return function () {
        const user = saveUser(Db, attrs)
        welcomeUser(Email, user)
    }
}

const saveUser = function (Db, attrs) {
    // ...
}

const welcomeUser = function (Email, user) {
    // ...
}

