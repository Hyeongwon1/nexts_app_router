"use client";
import {useState} from "react";

export default function Searchbar(){

  const [search, setSerch] = useState("");
  const onChangeSearch =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setSerch(e.target.value);
  }
  return<div>
    <input value={search} onChange={onChangeSearch}></input>
    <button>버튼</button>
  </div>
}