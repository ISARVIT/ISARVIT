import logo from './logo.svg';
import './App.css';

import Survey from "material-survey/components/Survey"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Survey
  form={{
    questions: [
      {
        isRequired: true,
        name: "text-feeling",
        title: "How do you feel?",
        type: "text"
      },
      {
        isRequired: true,
        name: "text-feeling",
        title: "Type any number!",
        type: "text",
        validators: [
          {
            maxValue: 200,
            minValue: 1,
            text: "Woah that's wayyy too high",
            type: "numeric"
          }
        ]
      },
      {
        choices: ["It's great!", "Not a fan", "I could get used to it"],
        name: "dropdown-feeling",
        title: "How do you feel about this dropdown?",
        type: "dropdown"
      },
      {
        name: "like-boolean",
        title: "Do you like boolean questions?",
        type: "boolean"
      },
      {
        choices: ["Brown Bear", "Grizzly Bear", "Black Bear", "Polar Bear"],
        name: "strongest-bear",
        title: "What kind of bear is strongest?",
        type: "radiogroup"
      },
      {
        choices: ["Brown Bear", "Grizzly Bear", "Black Bear", "Polar Bear"],
        name: "brown-bear",
        title: "What kind of bears are brown?",
        type: "checkbox"
      },
      {
        choices: ["Marinara", "Ranch", "Ketchup", "Alfredo"],
        choicesAtOnce: 3,
        name: "sauce-ranking",
        title: "What kind of sauce do you like?",
        trials: 3,
        type: "choiceranker"
      },
      {
        max: 10,
        min: 0,
        name: "mouse-size",
        title: "How large is a mouse?",
        type: "slider",
        unit: "inches"
      },
      {
        maxRateDescription: "Extremely Important",
        minRateDescription: "Not Important",
        name: "global-warming",
        title: "How important is global warming?",
        type: "rating"
      },
      {
        name: "preferred-us-region",
        title: "What region of the U.S. would you like to live in?",
        type: "us-region"
      },
      {
        name: "zip-code",
        requestUrl: "/zip-code",
        title: "What's your zip code?",
        type: "autocomplete"
      }
    ]
  }}
  autocompleteRequest={function noRefCheck() {}}
  onFinish={function noRefCheck() {}}
/>;
    </div>
  );
}

export default App;
