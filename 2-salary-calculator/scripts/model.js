//it's better to store everything in a singleton object as it is more readable and maintainable
//if we make any change to the object, we can easily change it in all the places where it is used
export const allowances = {

    basicSalary: 0,

    hra() {

        return (50/100) * this.basicSalary;
    },

    da() {

        return (20/100) * this.basicSalary;
    },

    ta() {

        return (30/100) * this.basicSalary;
    },

    ma() {

        return (15/100) * this.basicSalary;
    },

    pf() {

        return (5/100) * this.basicSalary;
    },

    gs() {

        return this.basicSalary + this.hra() + this.da() + this.ta() + this.ma();
    },
    
    ns() {

        return this.gs() - this.pf();
    },
};