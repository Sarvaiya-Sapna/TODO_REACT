import React, { useEffect } from "react";
import { useState } from "react";

//local storage to get
const getLocalData =() =>{
  const list = localStorage.getItem("lists")
 console.log(list);
if(list){
  return  JSON.parse(localStorage.getItem("lists"));
}
else{
  return [];
}
}
const Crud = () => {
   const[inputData,setInputData] = useState('');
   const[items,setItems] = useState(getLocalData(),[]); 
   const[isEditItem,setIsEditItem]=useState({isEdit:false,index:-1});
   const addItem = () => {
     if(!inputData) { 
      alert("please fill text...");
     }
     else {
       if(isEditItem.isEdit){
        let current_array = [...items];
        current_array[isEditItem.ind]= inputData;
        setItems(current_array); 
        setIsEditItem({...isEditItem,isEdit:false,ind:-1})
       }
       else{
        let current_array = [...items];
        current_array[isEditItem.ind]= inputData;
         setItems([...items,inputData]);
       }
      setInputData('');
   }
  }

  useEffect(()=>{
    localStorage.setItem('lists',JSON.stringify(items));
  },[items]);
  
  const editItems = (id) =>{
   setIsEditItem({...isEditItem,isEdit:true,ind:id})
    const edit=[items[id]];
    setInputData(edit);
   }
  const deleteItems = (id) =>{
    const updatedItems = items.filter((elem,ind) => {
      return ind !== id;
    });
    setItems(updatedItems);
  }
    return (
      <>
     <div className="main-div">
     <div className="title">
     <img src="./todo.jpg" className="todo-logo"></img>
     <h1>TODO APP</h1>
     </div>
      <div className="addItems">
      <input type="text" placeholder="Enter name..." className="input-text"
        value={inputData} onChange={(e) => setInputData(e.target.value)}
      />
      <button className="plus-btn" onClick={addItem}><i class="fa fa-plus" ></i></button>
      </div>
          <div className="showItems">  
            {
              items.map((elem,ind) => {
                 return (
                   <div className="eachItem" key={ind}>
                     <p className="adding-item">{elem}
                     <button className="edit-btn" onClick={() => editItems(ind)}>
                   <i className="fa fa-edit"></i></button>  
                    <button className="del-btn" onClick={() => deleteItems(ind)}>
                   <i className="fa fa-remove"></i></button>
                   </p>
                   </div>
                 )
              })
            }
            </div>
          </div>
           </>   
           )
}
export default Crud;