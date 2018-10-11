// classList扩展
DOMTokenList.prototype.adds = function (tokens) {
    tokens.split(" ").forEach(token => {
        this.add(token);
    });
    return this
};