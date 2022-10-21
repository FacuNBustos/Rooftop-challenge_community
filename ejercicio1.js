
const makeFigure = (size) => {
    const makeArray = (n) => {
        let array = [];
        for (let i = 0; i < n; i++) {
            let items = [];
            for (let j = 0; j < n; j++) {
                items.push(0)
            };
            array.push(items)
        };        
        return array
    };

    const recursiveMaker = (spacing, array, { x=0, y=0, flag=0 } = {}) => {
        /* 
            x - Posicion relativa al eje X.
            y - Posicion relativa al eje Y.
            flag - referencia de espaciado ya aplicado en la ejecucion.
            spacing = referencia de espaciado a aplicar.
        */
        const n = array.length - 1;

        for (x; x < n - flag; x++) {
            array[y][x] = 1
        };
        for (y; y < n - flag; y++) {
            array[y][x] = 1
        };
        for (x; x > flag; x--) {
            array[y][x] = 1
        };
        for (y; y > spacing + flag; y--) {
            array[y][x] = 1
        };
        flag += spacing;

        if (x+y == n) {
            if (array.length %2 !== 0) array[y][x] = 1;
            return array
        };
        return recursiveMaker(spacing, array, { x:x, y:y, flag:flag })
    };

	return recursiveMaker(2, makeArray(size))
}

module.exports = makeFigure;