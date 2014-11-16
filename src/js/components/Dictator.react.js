var React = require('react');

var quotes = [
    {
        "quote" : "You have to know everything in order to be completely safe",
        "who" : "Erich Mielke, head of the East German Stasi",
        "when" : "",
        "dictator" : true
    },
    {
        "quote" : "You have zero privacy anyway. Get over it",
        "who" : "Scott Mcnealy, CEO Sun Microsystems",
        "when" : "1999",
        "dictator" : false
    },
    {
        "quote" : "You can't have 100% security and also then have 100% privacy and zero inconvenience",
        "who" : "Barack Obama, President of the USA",
        "when" : "|6/8/2013",
        "dictator" : false
    },
    {
        "quote" : "Innocence never fears public scrutiny",
        "who" : "Maximilian Robespierre, National Assembly of France during the Reign of Terror",
        "when" : "3/31/1794 (aka  11 Germinal Year II)",
        "dictator" : true
    },
    {
        "quote" : "Leaking is tantamount to aiding the enemies of the country",
        "who" : "US Department of Defence internal strategy document",
        "when" : "June 1, 2012",
        "dictator" : false
    },
    {
        "quote" : "I think the privacy issue has really been taken off the table.",
        "who" : "Ray Kelly, Chief of NYPD",
        "when" : "April 22, 2013",
        "dictator" : false
    }
];

var Dictator = React.createClass({
    getInitialState: function () {
        var quote = {};
        if (quotes.length) {
            quote = quotes[0];
        }
        return {
            currentQuoteNum: 0,
            currentQuote: quote,
            answered: false
        }
    },
    answer: function (event) {
        event.preventDefault();
        var choice = event.target.value;
        var isDictator = this.state.currentQuote.dictator;
        var newState = {
            answered: true
        };

        if (isDictator) {
            newState.correct = choice === 'yes';
        } else {
            newState.correct = choice !== 'yes';
        }

        this.setState(newState);
    },
    next: function (event) {
        event.preventDefault();
        var idx = (this.state.currentQuoteNum + 1) % quotes.length;
        this.setState({
            currentQuoteNum: idx,
            currentQuote: quotes[idx],
            answered: false
        });
    },
    render: function () {
        if (!this.state.answered) {
            return (
                <div className="quote-view">
                    <blockquote>{this.state.currentQuote.quote}</blockquote>
                    <p className="question text-center">Was this said by a dictator?</p>
                    <button type="button" className="btn btn-success btn-lg yes-button" value="yes" onClick={this.answer}>Yes</button>
                    <button type="button" className="btn btn-danger btn-lg no-button" value="no" onClick={this.answer}>No</button>
                </div>
            );
        } else {
            var result;

            if (this.state.correct) {
                result = <div className="result"><h2>Correct!</h2></div>;
            } else {
                result = <div className="result"><h2>Wrong!</h2></div>;
            }

            return (
                <div className="quote-view">
                    <blockquote>{this.state.currentQuote.quote}</blockquote>
                    {result}
                    <p className="answer">This was actually said by <span className="who">{this.state.currentQuote.who}</span></p>
                    <button type="button" className="btn btn-primary btn-block next-button" onClick={this.next}>Next</button>
                </div>
            );
        }
    }
});

module.exports = Dictator;