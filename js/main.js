	
class Cowboy {
	name = this.name;
    life = this.life;
    
	constructor(name) {
		this.reset();
        this.name = name;	
	}

	reset() {	
        this.life = 2;
        this.name;
    }
    
	getStatus() {
        if (parseInt(this.life) === 3) {
        
        this.life = " For being far too slow, " + this.name + " has been shot!";
            return this.life;
        } else { 
                return this.name + " is the fastest Gun Slinger!";
		}
    }
    
    getDraw() {
		let r = Math.floor(Math.random() * 6) + 1;
		return r;
	}

	fastDraw(bigIron, runningGun) {
		var drawRunningGun = this.getDraw();
		var drawBigIron = this.getDraw();

		if (drawRunningGun > drawBigIron) {
			document.getElementById("shoot").innerHTML = bigIron.name + " moves to draw on " + runningGun.name;
			bigIron.life++;
			runningGun.life--;
			
		} else if (drawRunningGun < drawBigIron) {
			document.getElementById("shoot").innerHTML = runningGun.name + " moves to draw on " + bigIron.name;
			bigIron.life--;
			runningGun.life++;	
		}
    }
	
}

function resetGame() {
	gunslinger1.reset();
	gunslinger2.reset();
    status();
    location.reload();
}

function startGame() {
	gunslinger1.fastDraw(gunslinger2, gunslinger1);
    status();
}

function status() {
    document.getElementById("p1").innerHTML = gunslinger1.getStatus();
    document.getElementById("p2").innerHTML = gunslinger2.getStatus();
}

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');


gunslinger1 = new Cowboy("Big Iron");
gunslinger2 = new Cowboy("Running Gun");


btn2.onclick = startGame;
btn1.onclick = resetGame;

