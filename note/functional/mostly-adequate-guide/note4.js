// don't do this
const hi = name => `hi ${name}`
const greeting = name => hi(name)

// 直接写成 👇

const greeting = hi

const BlogController = {
    index(posts) {
        return Views.index(posts)
    }
}

// 👇

const BlogController = {
    index: Views.index
}



httpGet('/post/2', json => renderPost(json))

// 如果 renderPost 参数有修改，则需要回来修改

httpGet('/post/2', (json, err) => renderPost(json, err))

// 将函数作为一等公民 👇

httpGet('/post/2', renderPost)


