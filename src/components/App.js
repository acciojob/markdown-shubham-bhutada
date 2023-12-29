import React,{useState,useEffect} from "react";
import Markdown from "react-markdown";
import '../styles/App.css'

function App(){

  const [markdown,setMarkdown] = useState("")

  const handleChange = (e) =>{
    setMarkdown(e.target.value)
  }
  
    return(
      <div className="app">
        <textarea onChange={handleChange}/>
        <Markdown className="preview">{markdown}</Markdown>
      </div>
    )
}

export default App;