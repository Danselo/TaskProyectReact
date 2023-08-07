import { useEffect, useState } from "react";
//* CUSTOM HOOK
export function useLocalStorage(itemName,initialValue){

    const [item,setItem] = useState(initialValue)
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(false);
    // ? CONDITIONAL FOR ERROR IN CASE OF NULL

    useEffect(()=>{
      setTimeout(()=>{
        try{
          const localStorageString = localStorage.getItem(itemName);
          let parsedItem;
          if(!localStorageString){
            localStorage.setItem(itemName,JSON.stringify(initialValue))
            parsedItem = initialValue;
          }else{
            parsedItem = JSON.parse(localStorageString);
            setItem(parsedItem)
          }
          setLoading(false)
  
        }catch(e){
          setLoading(false)
          setError(true)
        }
      },2000)
    },[itemName,initialValue])
    
  
    //? UPDATE LOCALSTORAGE AND TASK FUNCTION
  const saveItem = (newItem) =>{
      localStorage.setItem(itemName , JSON.stringify(newItem))
      setItem(newItem)
   }
  
    return {
      item,
      saveItem,
      loading,
      error
    }
  }

  // localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));