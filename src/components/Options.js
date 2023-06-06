import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Options = (props) => {
    const { paragraphs, includeHtml, setIncludeHtml, inputValue, setInputValue, tag, setTag } = props; 

    return (
        <div className="options">
            <div className="wrapper">
                <div className="optionsContainer">
                    <div className="paragraphs">
                        <p> Paragraphs: </p>
                        <input type="number" min="1" max="10"  value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    </div>
                    <div className="tags">
                        <p>Tags: </p>
                        <select defaultValue={tag} onChange={(e) => setTag(e.target.value)} >
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
                        <select defaultValue={includeHtml} onChange={(e) => setIncludeHtml(e.target.value)} >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="copy">
                <CopyToClipboard text={paragraphs.map(sentence => includeHtml === "Yes" ? `<${tag}>${sentence}</${tag}>` : sentence)} >
                    <button>Copy to Clipboard</button>
                </CopyToClipboard>
            </div>
        </div>
    );
};

export default Options;

