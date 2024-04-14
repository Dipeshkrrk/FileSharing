import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import { useState,useEffect } from 'react';
import { uploadFile } from './service/api'; 


function App() {
  const [file, setFile] = useState('');
  const [result, setResult]=useState('');
  const fileInputRef=useRef();
  const onUploadClick=()=>{
    fileInputRef.current.click();
  };
  useEffect(()=>{
    const getImg = async ()=>{
      if(file){
        const data= new FormData();
        data.append("name",file.name);
        data.append("file",file);
        let response=await uploadFile(data);
        setResult(response?.path);
      }
    }
    getImg();
  },[file]);
  console.log(file);
  return (  
    <div className="App">
      <div className="container">
        <div className="box">
          <h1>Simple and Easy file transfer</h1>
          <p>Upload and share the file link
          </p>
        <button onClick={()=>onUploadClick()}>upload</button>
        <input type="file" ref={fileInputRef} style={{ display: 'none' }} 
        onChange={(e)=>setFile(e.target.files[0])}/>
        <a href={result} target='_blank'>{result}</a>
        </div>
      </div>
    </div>
  );
}

export default App;
