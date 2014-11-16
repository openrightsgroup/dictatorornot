var React = require('react');

var quotes =[
    {
        "quote" : "The time of happiness as a private matter is over",
        "who"   : "Adolf Hitler",
        "pic"   : "http://upload.wikimedia.org/wikipedia/commons/9/9a/Bundesarchiv_Bild_183-S33882,_Adolf_Hitler_%28cropped2%29.jpg",
        "when"  : "",
        "dictator" : true
    },
    {
        "quote" : "You have to know everything in order to be completely safe",
        "who" : "Erich Mielke, head of the East German Stasi",
        "pic" : "http://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Bundesarchiv_Bild_183-R0522-177,_Erich_Mielke.jpg/220px-Bundesarchiv_Bild_183-R0522-177,_Erich_Mielke.jpg",
        "when" : "",
        "dictator" : true
    },
    {
        "quote" : "You have zero privacy anyway. Get over it",
        "who" : "Scott Mcnealy, CEO Sun Microsystems",
        "pic" : "http://upload.wikimedia.org/wikipedia/commons/6/6d/Scott_McNealy_2005_%2845227110%29.jpg",
        "when" : "1999",
        "dictator" : false
    },
    {
        "quote" : "You can't have 100% security and also then have 100% privacy and zero inconvenience",
        "who" : "Barack Obama, President of the USA",
        "pic" : "http://upload.wikimedia.org/wikipedia/commons/e/e9/Official_portrait_of_Barack_Obama.jpg",
        "when" : "|6/8/2013",
        "dictator" : false
    },
    {
        "quote" : "Leaking is tantamount to aiding the enemies of the [country",
        "who" : "US Department of Defence internal strategy document",
        "pic" : "http://upload.wikimedia.org/wikipedia/commons/e/e0/United_States_Department_of_Defense_Seal.svg",
        "when" : "June 1, 2012",
        "dictator" : false
    },
    {
        "quote" : "Innocence never fears public scrutiny",
        "who" : "Maximilian Robespierre, National Assembly of France during the Reign of Terror",
        "when" : "3/31/1794 (aka  11 Germinal Year II)",
        "pic" : "http://upload.wikimedia.org/wikipedia/commons/1/12/Hw-robespierre.jpg",
        "dictator" : true
    },
    {
        "quote" : "I think the privacy issue has really been taken off the table.",
        "who" : "Ray Kelly, Chief of NYPD",
        "pic" : "http://upload.wikimedia.org/wikipedia/commons/7/7d/Ray_Kelly_US_Commissioner_of_Customs.jpg",
        "when" : "April 22, 2013",
        "dictator" : false
    },
    {   "quote" : "If the police need more help to do their work, I will not hesitate in granting it to them",
        "who" : "Theresa May, Home Secretary (UK)",
        "pic" : "http://upload.wikimedia.org/wikipedia/commons/6/62/Theresa_May.jpg",
        "when" : "28 March 2011",
        "dictator" : false
    },
    {
        "quote" : "Ideas are more powerful than guns. We would not let our enemies have guns, why should we let them have ideas?",
        "who"   : "Joseph Stalin",
        "pic"   : "http://upload.wikimedia.org/wikipedia/commons/4/43/Stalin01.jpg",
        "when"  : "",
        "dictator" : true
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