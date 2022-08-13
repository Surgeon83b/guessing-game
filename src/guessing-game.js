class GuessingGame {
	
	    constructor() {}

    setRange(min, max) {
			this.minVal = min;
			this.maxVal = max;
    }

    guess() {
			return Math.round((this.maxVal + this.minVal)/2);
    }

    lower() {
			this.setRange(this.minVal, this.guess()); 
    }

    greater() {
			this.setRange(this.guess(), this.maxVal); 
    }
}

module.exports = GuessingGame;
