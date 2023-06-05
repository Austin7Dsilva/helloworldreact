import React from "react";

const Options = (props) => {
    const { paragraphs, includeHtml, setIncludeHtml, inputValue, setInputValue, tag, setTag } = props; 

    paragraphs={paragraphs}
    includeHtml={includeHtml}
    setIncludeHtml={setIncludeHtml}
    inputValue={inputValue}
    setInputValue={setInputValue}
    tag={tag}
    setTag={setTag}

    return (
        <div className="options">
            <div className="wrapper">
                <div className="optionsContainer">
                    <div className="paragraphs">
                        <p> Paragraphs: </p>
                        <input type="number" min="1" max="10"  value={inputValue}/>
                    </div>
                    <div className="tags">
                        <p>Tags: </p>
                        <select>
                            <option value="p">&lt;p&gt;</option>
                            <option value="p">&lt;h1&gt;</option>
                            <option value="p">&lt;h2&gt;</option>
                            <option value="p">&lt;h3&gt;</option>
                            <option value="p">&lt;h4&gt;</option>
                            <option value="p">&lt;h5&gt;</option>
                            <option value="p">&lt;h6&gt;</option>
                            <option value="p">&lt;span&gt;</option>
                        </select>
                    </div>
                    <div className="include">
                        <p>Include HTML: </p>
                        <select>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="copy">
                <p>Copy to Clipboard</p>
            </div>
        </div>
    );
};

export default Options;