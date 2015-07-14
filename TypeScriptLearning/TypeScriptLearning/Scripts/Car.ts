class car{

    engine: string 

    constructor(engine: string) {
        this.engine = engine;
    }

    start() {
        alert('Engine started: ' + this.engine);
    }

    stop() {
        alert('Engine Stopped: ' + this.engine);
    }
}

window.onload = function () {
    var car = new car('v8');
    car.start();
    car.stop();
};