/**
 * 异步控制
 * @param {*} params 
 * @param {*} handler 
 * @param {*} limit 
 */
module.exports = (params, handler, limit) => {
    let sequence = [].concat(params);
    let promises = sequence.splice(0, limit).map((param, index) => {
        return handler(param).then(() => index);
    });
    return sequence
        .reduce((pCollect, param) => {
            return pCollect
                .then(() => {
                    return Promise.race(promises);
                })
                .then(fastestIndex => {
                    promises[fastestIndex] = handler(param).then(() => fastestIndex);
                })
                .catch(err => {
                    console.error(err);
                });
        }, Promise.resolve())
        .then(() => Promise.all(promises));
}
