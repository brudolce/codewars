name = 'The Window';

var alpha = {
    name : 'My Alpha',
    getNameFunc : function() {
        let self=this
        return function() {
            return self.name;
        };
    }
};
