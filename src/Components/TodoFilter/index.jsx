import {useContext} from 'react';
import { TodoContext } from '../TodoContext';

export  function TodoFilter() {
  const {
    searchTaks,
    setSearchTaks
  } = useContext(TodoContext)
  const handleChangeSearch = (e)=>{
    setSearchTaks(e.target.value)
  }
  return (
      <>
        <span className="search-icon-find">
          <input className= "filter-task" type="text" placeholder="Search Task" onChange={handleChangeSearch} value={searchTaks}/>

        </span>
      </>
        
  )
}
