const Engineer = require("../lib/Engineer");
describe("Engineer", ()=>{
    describe("getRole",()=>{
        it("should return 'Engineer' when function is called", ()=>{
            const role= 'Engineer';
            const result= new Engineer().getRole();
            expect(result).toEqual(role);
        });
    });
});