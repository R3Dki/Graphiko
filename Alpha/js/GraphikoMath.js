export let Operators = {
    Derivative: function (input) {
        for (let i = input-1; i > 0; i--) {
            input *= i
        }
        return input;
    },
    Threshold: function (input, threshold) {
        if (input >= threshold) {
            return 1;
        }
        return 0;
    },
    Threshold1: function (input, threshold) {
        if (input <= -threshold) {
            return -1;
        }
        return 0;
    },
    PPThreshold: function (input, threshold) {
        if (input < -threshold) {
            return -1;
        }else if (input > threshold) {
            return 1;
        }
        return 0;
    },
    PPThreshold1: function (input, nThreshold, pThreshold) {
        if (input < -nThreshold) {
            return -1;
        }else if (input > pThreshold) {
            return 1;
        }
        return 0;
    },
    PositiveFilter: function (input) {
        if (input >= 0) {
            return input;
        }
        return 0;
    },
    NegativeFilter: function (input) {
        if (input <= 0) {
            return input;
        }
        return 0;
    },
    PositiveOut: function (input) {
        return Math.abs(input);
    },
    NegativeOut: function (input) {
        return -Math.abs(input);
    }
}

export let MathConst = {
    EulerNum: function () {
        return 2.71828;
    }
}

export let Function = {
    LapRamp: function (t) {
        return t;
    },
    LapParable: function (t, epxonent) {
        return t**epxonent;
    },
    Sinewave: function (t) {
        return Math.sin(t)
    },
    Cosinewave: function (t) {
        return Math.cos(t)
    },
    Trianglewave: function (t, period) {
        return  (Math.abs((t++ % period*2) - period)/period)-0.5;
    },
    Sawtoothwave: function name(t, period, symmetry) {
        if (symmetry == false) {
            return Math.abs(Math.floor((1/period)*t)-(1/period)*t);
        }
        return Math.abs(Math.floor((1/period)*-t)-(1/period)*-t);
    },
    SinSquarewave: function (t, threshold) {
        return Operators.Threshold(Math.sin(t), threshold);;
    },
    CosSquarewave: function (t, threshold) {
        return Operators.Threshold(Math.Cos(t), threshold);;
    },
    Hyperbola: function (t) {
        return 1/t;
    }
}