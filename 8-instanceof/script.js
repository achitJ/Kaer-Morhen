// instanceOf(a,A) => true

class A {

}

const a = new A();

class B {}

const b = new B();

function instanceOf(obj = null, Construct = null) {

    if(typeof Construct != 'function') {

        return false;
    }

    if(typeof obj != 'object') {

        return false;
    }

    if(Object.getPrototypeOf(obj) === null) return false;

    if(Object.getPrototypeOf(obj) === Construct.prototype) return true;

    return instanceOf(Object.getPrototypeOf(obj));
}

instanceOf(a, A); // true
instanceOf(b, A); // false