class Robot{
    constructor(name){
        this.name = name;
    }

    move()
    {
        console.log(`${this.name} se deplaseaza`);
    }
}
const r0=new Robot("Robo1");
r0.move();

class Weapon{
    constructor(description)
    {
        this.description=description;
    }
    fire()
    {
        console.log(`${this.description} trage`);
    }
}

const w0=new Weapon("Pistol");
w0.fire();

class CombatRobot extends Robot{
    constructor(name)
    {
        super(name);    
        this.weapon=[];
    }

    addWeapon(w)
    {
        this.weapon.push(w);
    }
    fire()
    {
        console.log("firing all weapons:");
        for(const w of this.weapon)
            w.fire();
    }
}

const r1=new CombatRobot("RoboWar");
r1.addWeapon(w0);
r1.fire();

Robot.prototype.fly=function(){
    console.log(`${this.name} zboara`);
}
r1.fly();