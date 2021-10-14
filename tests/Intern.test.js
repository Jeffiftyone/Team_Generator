const Intern = require("../lib/Intern");
describe("Intern", ()=>{
    describe("getRole",()=>{
        it("should return 'Intern' when function is called", ()=>{
            const role= 'Intern';
            const result= new Intern().getRole();
            expect(result).toEqual(role);
        });
    });
});