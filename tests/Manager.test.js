const Manager = require("../lib/Manager");
describe("Manager", ()=>{
    describe("getRole",()=>{
        it("should return 'Manager' when function is called", ()=>{
            const role= 'Manager';
            const result= new Manager().getRole();
            expect(result).toEqual(role);
        });
    });
});