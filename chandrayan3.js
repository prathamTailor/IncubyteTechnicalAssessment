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
}

module.exports = {
    Galaxy: Galaxy,
    ChandraYan3: ChandraYan3
}