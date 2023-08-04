class Galaxy{
    constructor(xpBoundry,ypBoundry,zpBoundry, xnBoundry, ynBoundry, znBoundry){
        this.xpBoundry = xpBoundry;
        this.ypBoundry = ypBoundry;
        this.zpBoundry = zpBoundry;
        this.xnBoundry = xnBoundry;
        this.ynBoundry = ynBoundry;
        this.znBoundry = znBoundry;
    }
}

class ChandraYan3{
    constructor(x,y,z,currDirection,galaxy){
        this.x = x;
        this.y = y;
        this.z = z;
        this.currDirection = currDirection;
        this.galaxy = galaxy;
    }

    moveForward(){
        if(this.currDirection == 'n'){
            if(this.y+1 <= this.galaxy.ypBoundry){
                this.y += 1;
            }else{
                throw Error("Chandrayan move out of y boundry of galaxy");
            }
        }else if(this.currDirection == 's'){
            if(this.y-1 >= -1*this.galaxy.ynBoundry){
                this.y -= 1;
            }else{
                throw Error("Chandrayan move out of y boundry of galaxy");
            }
        } else if(this.currDirection == 'e'){
            if(this.x+1 <= this.galaxy.xpBoundry){
                this.x += 1;
            }else{
                throw Error("Chandrayan move out of x boundry of galaxy");
            }
        }else if(this.currDirection == 'w'){
            if(this.x-1 >= -1*this.galaxy.xnBoundry){
                this.x -= 1;
            }else{
                throw Error("Chandrayan move out of x boundry of galaxy");
            }
        }else if(this.currDirection == 'u'){
            if(this.z+1 <= this.galaxy.zpBoundry){
                this.z += 1;
            }else{
                throw Error("Chandrayan move out of z boundry of galaxy");
            }
        }else if(this.currDirection == 'd'){
            if(this.z-1 >= -1*this.galaxy.znBoundry){
                this.z -= 1;
            }
            else{
                throw Error("Chandrayan move out of z boundry of galaxy");
            }
        }
    }

    moveBackword(){
        if(this.currDirection == 'n'){
            if(this.y-1 >= -1*this.galaxy.ynBoundry){
                this.y -= 1;
            }else{
                throw Error("Chandrayan move out of y boundry of galaxy");
            }
        }else if(this.currDirection == 's'){
            if(this.y+1 <= this.galaxy.ypBoundry){
                this.y += 1;
            }else{
                throw Error("Chandrayan move out of y boundry of galaxy");
            }
        } else if(this.currDirection == 'e'){
            if(this.x-1 >= -1*this.galaxy.xnBoundry){
                this.x -= 1;
            }else{
                throw Error("Chandrayan move out of x boundry of galaxy");
            }
        }else if(this.currDirection == 'w'){
            if(this.x+1 <= this.galaxy.xpBoundry){
                this.x += 1;
            }else{
                throw Error("Chandrayan move out of x boundry of galaxy");
            }
        }else if(this.currDirection == 'u'){
            if(this.z-1 >= -1*this.galaxy.znBoundry){
                this.z -= 1;
            }
            else{
                throw Error("Chandrayan move out of z boundry of galaxy");
            }
        }else if(this.currDirection == 'd'){
            if(this.z+1 <= this.galaxy.zpBoundry){
                this.z += 1;
            }else{
                throw Error("Chandrayan move out of z boundry of galaxy");
            }
        }
    }

    printCurrStat(){
        console.log("( "+this.x+", "+this.y+", "+this.z+", "+this.currDirection+" )");
    }

    moveChandrayan(command){
        command = command.toLowerCase();
        switch(command){
            case 'f':
                this.moveForward();
                break;  
            case 'b':
                this.moveBackword();
                break;
            default:
                throw Error("Invalid command");
        }
    }
}

// commands = "fff";

// var galaxy = new Galaxy(3,3,3,3,3,3);
// var rocket = new ChandraYan3(0,0,0,'n',galaxy);

// console.log("Initial state: ");
// rocket.printCurrStat();
// console.log();

// for(indx in commands){
//     rocket.moveChandrayan(commands[indx]);
// }

// console.log("Final state: ");
// rocket.printCurrStat();

module.exports = {
    Galaxy: Galaxy,
    ChandraYan3: ChandraYan3
}