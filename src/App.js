import React, { useState, useEffect } from "react";
import Options from "./components/Options";
import './App.css';

const App = () =>{
  const [paragraphs, setParagraphs] = useState([]);
  const [tag, setTag] = useState('p');
  const [inputValue, setInputValue] = useState(1);
  const [includeHtml, setIncludeHtml] = useState("Yes");

  useEffect(() => {
    const url = 'https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1';

    fetch(url)
    .then(res => res.json()) 
    .then(data => setParagraphs(data))
  }, [])
  

  return(
      <div className="App">
        <div className="container">
          <div className="title">
            <h1>Lorem Ipsum Text Generator</h1>
          </div>
          <Options
            paragraphs={paragraphs}
            includeHtml={includeHtml}
            setIncludeHtml={setIncludeHtml}
            inputValue={inputValue}
            setInputValue={setInputValue}
            tag={tag}
            setTag={setTag}
          />
        </div>
      </div>
  );
};

export default App;
