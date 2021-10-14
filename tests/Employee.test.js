const Employee = require('../lib/Employee');

describe("Employee", ()=>{
    describe("getRole",()=>{
        it("should return 'Employee' when function is called", ()=>{
            const role= 'Employee';
            const result= new Employee().getRole();
            expect(result).toEqual(role);
        });
    });
})