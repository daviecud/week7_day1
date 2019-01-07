const PubSub = require('../helpers/pub_sub.js');

const ResultView = function() {

};

ResultView.prototype.bindEvents = function() {
  PubSub.subscribe('PrimeNumber:result-calculated', (event) => {
    const prime = event.detail;
    this.displayResult()
  })
}

module.exports = ResultView;
