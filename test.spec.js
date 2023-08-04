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

    test('Testing moveChandrayan function with invalid command', () => {
        command = "zp";
        try{
            chandrayan3.moveChandrayan(command);
        }catch(e){
            expect(e.message).toEqual("Invalid command");
        }
    });

    test('Testing moveChandrayan function with correct command', () => {
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

    test('Testing moveChandrayan function with correct command but out of galaxys y boundry', () => {
        command = "f";
        chandrayan3.y=3;

        try{
            chandrayan3.moveChandrayan(command);
        }catch(e){
            expect(e.message).toEqual("Chandrayan move out of y boundry of galaxy");
        }
        
    });

    test('Testing moveChandrayan function with correct command', () => {
        command = "b";
        chandrayan3.x = 1;
        chandrayan3.currDirection = 'e';
        try{
            chandrayan3.moveChandrayan(command);
        }catch(e){
            expect(e.message).toEqual("");
        }
        expect(chandrayan3.x).toBe(0);
        expect(chandrayan3.y).toBe(0);
        expect(chandrayan3.z).toBe(0);
        expect(chandrayan3.currDirection).toBe('e');
    });

    test('Testing moveForward function', () => {
        try{
            chandrayan3.moveForward();
        }catch(e){
            expect(e.message).toEqual("");
        }
        expect(chandrayan3.x).toBe(0);
        expect(chandrayan3.y).toBe(1);
        expect(chandrayan3.z).toBe(0);
        expect(chandrayan3.currDirection).toBe('n');
    });

    test('Testing moveForward function with the case then boundry error will come', () => {
        chandrayan3.y = 3;
        try{
            chandrayan3.moveForward();
        }catch(e){
            expect(e.message).toEqual("Chandrayan move out of y boundry of galaxy");
        }
    });

    test('Testing moveBackward function', () => {
        try{
            chandrayan3.moveBackword();
        }catch(e){
            expect(e.message).toEqual("");
        }
        expect(chandrayan3.x).toBe(0);
        expect(chandrayan3.y).toBe(-1);
        expect(chandrayan3.z).toBe(0);
        expect(chandrayan3.currDirection).toBe('n');
    });

    test('Testing moveBackward function with the case then boundry error will come', () => {
        chandrayan3.y = -3;
        try{
            chandrayan3.moveBackword();
        }catch(e){
            expect(e.message).toEqual("Chandrayan move out of y boundry of galaxy");
        }
    });

    test('Testing Turn Left function', () => {
        chandrayan3.turnLeft();
        expect(chandrayan3.x).toBe(0);
        expect(chandrayan3.y).toBe(0);
        expect(chandrayan3.z).toBe(0);
        expect(chandrayan3.currDirection).toBe('w');
    });

    test('Testing Turn Right function', () => {
        chandrayan3.currDirection = 's';
        chandrayan3.turnRight();
        expect(chandrayan3.x).toBe(0);
        expect(chandrayan3.y).toBe(0);
        expect(chandrayan3.z).toBe(0);
        expect(chandrayan3.currDirection).toBe('w');
    });

    test('Testing Turn Up function', () => {
        chandrayan3.turnUp();
        expect(chandrayan3.x).toBe(0);
        expect(chandrayan3.y).toBe(0);
        expect(chandrayan3.z).toBe(0);
        expect(chandrayan3.currDirection).toBe('u');
    });   
    
    test('Testing Turn Down function', () => {
        chandrayan3.turnDown();
        expect(chandrayan3.x).toBe(0);
        expect(chandrayan3.y).toBe(0);
        expect(chandrayan3.z).toBe(0);
        expect(chandrayan3.currDirection).toBe('d');
    });  
 });
 