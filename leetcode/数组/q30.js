/**
 * 30. 串联所有单词的子串  
 * 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

   注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。
 * 
 * @param {*} s 
 * @param {*} words 
 * @return {number[]}
 */


var findSubstring = function (s, words) {
    const wordLength = words[0].length
    const sortWordString = words.sort().join('')
    const sortWordStringLength = sortWordString.length
    const res = []

    const wordsCache = {}
    words.forEach(val => wordsCache[val] = true)

    for (let i = 0; i <= s.length - sortWordStringLength; i++) {
        const substring = s.substring(i, i + sortWordStringLength)
        const splitWordsString = splitWords(substring, wordLength, wordsCache)
        if (sortWordString === splitWordsString) res.push(i)
    }
    return res
};

function splitWords(wordsString, dis, cache) {
    const res = []
    for (let i = 0; i < wordsString.length / dis; i++) {
        const word = wordsString.substring(dis * i, dis * i + dis)
        if (!cache[word]) return ''
        res.push(word)
    }
    return res.sort().join('')
}


// 滑动窗口
var findSubstring2 = function (s, words) {
    if (!s || !words || !words.length) return [];
    let windows = {}, needs = {}, oneWordLen = words[0].length;
    for (let w of words) {
        needs[w] ? needs[w]++ : needs[w] = 1;
    }
    let l = 0, r = 0, count = 0, needsKeyLen = Object.keys(needs).length, ans = [];
    for (let i = 0; i < oneWordLen; i++) {
        windows = {};
        r = l = i;
        count = 0;
        while (r <= s.length - oneWordLen) {
            let w1 = s.slice(r, r + oneWordLen);
            r += oneWordLen;
            if (!needs[w1]) {
                windows = {};
                l = r;
                count = 0;
                continue;
            }
            windows[w1] ? windows[w1]++ : windows[w1] = 1;
            if (windows[w1] === needs[w1]) count++;
            while (count === needsKeyLen) {
                if (r - l === oneWordLen * words.length) ans.push(l);
                let w2 = s.slice(l, l + oneWordLen);
                l += oneWordLen;
                if (needs[w2]) {
                    windows[w2]--;
                    if (windows[w2] < needs[w2]) count--;
                }
            }
        }
    }
    return ans;
};