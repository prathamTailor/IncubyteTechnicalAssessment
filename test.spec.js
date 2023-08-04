const{Galaxy,ChandraYan3} = require("./chandrayan3");

describe('Testing of chandrayan', () => {
    let galaxy;
    let chandrayan3;

    beforeEach(()=>{
        galaxy = new Galaxy(3,3,3,3,3,3);
        chandrayan3 = new ChandraYan3(0,0,0,'n',galaxy);
    })

    test('Initialize chandrayan state', () => {
        expect(chandrayan3.x).toBe(0);
        expect(chandrayan3.y).toBe(0);
        expect(chandrayan3.z).toBe(0);
        expect(chandrayan3.currDirection).toBe('n');
        expect(chandrayan3.galaxy.xpBoundry).toBe(3);
        expect(chandrayan3.galaxy.ypBoundry).toBe(3);
        expect(chandrayan3.galaxy.zpBoundry).toBe(3);
        expect(chandrayan3.galaxy.xnBoundry).toBe(3);
        expect(chandrayan3.galaxy.ynBoundry).toBe(3);
        expect(chandrayan3.galaxy.znBoundry).toBe(3);
    });

    test('Testing moveForward function with invalid command', () => {
        command = "zp";
        try{
            chandrayan3.moveChandrayan(command);
        }catch(e){
            expect(e.message).toEqual("Invalid command");
        }
    });

    test('Testing moveForward function with correct command', () => {
        command = "f";
        try{
            chandrayan3.moveChandrayan(command);
        }catch(e){
            expect(e.message).toEqual("");
        }
        expect(chandrayan3.x).toBe(0);
        expect(chandrayan3.y).toBe(1);
        expect(chandrayan3.z).toBe(0);
        expect(chandrayan3.currDirection).toBe('n');
    });

    test('Testing moveForward function with correct command but out of galaxys y boundry', () => {
        command = "f";
        chandrayan3.y=3;

        try{
            chandrayan3.moveChandrayan(command);
        }catch(e){
            expect(e.message).toEqual("Chandrayan move out of y boundry of galaxy");
        }
        
    });
 });
 