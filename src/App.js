import './index.css';
import list from './products.json'
import {useState} from 'react';
import { Filter } from './Filter';



const App = () => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  }


  return(
    <div className='container'>
      <h1>My products</h1>
      <form>
         Search: <input onChange={handleChange} value={query} placeholder=''/>
      </form>
      <table className="table">
        <Filter list={list.products} query={query} />
      </table>
    </div>
  )
}

export default App