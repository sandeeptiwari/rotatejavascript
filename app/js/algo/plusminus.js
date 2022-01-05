const PlusMinus = function () {
    let finalResult = 0;

    PlusMinus.prototype.plus = function (value) {
        finalResult += value;
        return this;
    }

    PlusMinus.prototype.minus = function (value) {
        finalResult -= value;
        return this;
    }

    PlusMinus.prototype.value = function () {
        return finalResult;
    }

}


function plus(value) {
    return new PlusMinus().plus(value);
}

function minus(value) {
    return new PlusMinus().minus(value);
}

function value() {
    return new PlusMinus().value();
}

const r1 = plus(2).plus(3).value(); //output 2 + 3 = 5
console.log("T1", r1);

const r2 = plus(4).minus(2).value();// returns 4 - 2 = 2
console.log("T2", r2);

const r3 = plus(5).minus(3).plus(6).minus(1).value(); // 7
console.log("T3", r3);
