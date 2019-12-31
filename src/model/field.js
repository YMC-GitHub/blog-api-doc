
//include some models
class Field {
    constructor(data = {}) {
        this.__data = data
    }
    property(key, val = null, def = null) {
        let hasVal
        if (val || val === '' || val === 0 || val === false) {
            hasVal = true
        } else {
            hasVal = false
        }
        // set when (key,val)
        if (hasVal) {
            this.__data[key] = val;
        }
        // set when (key,null,def)
        else if (def) {
            this.__data[key] = def;
            // return def
        }
        // get when (key)
        else {
            return (key in this.__data && this.__data[key]) || null;
        }
        return this;
    }
    registerMethod() {
        let that = this;
        Object.keys(that.__data).forEach(key => {
            if (!(key in that) && that.__data[key]) {
                that[key] = (val, def) => that.property(key, val, def);
            }
        });
        return that;
    }
}
module.exports = Field
