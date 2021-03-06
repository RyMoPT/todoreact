import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      newItem:"",
      taskList: JSON.parse(localStorage.getItem('storage.key')) || [],
      isNightModeOn: false,
    }
  }

  deleteItem(id) {
    console.log(id);
    const list = [...this.state.taskList];

    const updatedList = list.filter(item => item.id !==id)
    localStorage.setItem('storage.key',JSON.stringify(updatedList))

    this.setState({
      taskList: updatedList,
    })
  }


  addItem(e) {
    
    console.log(this.props)
    console.log(e.target)
    e.preventDefault();
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    }

    const list = [...this.state.taskList];
    console.log(list)

    list.push(newItem)
    console.log(list)

    localStorage.setItem('storage.key',JSON.stringify(list))
    
    console.log(this.state.taskList)
    this.setState({
      taskList: list,
      newItem: ""
    });
    console.log(this.state.taskList)

  }
  
  updateInput(key, value) {
    this.setState({
      [key]:value
    })
  }
  render(){
    const body = document.body;
    body.className = this.state.isNightModeOn ? "bodyNight" : "";
  return (
    <div>

      <div 
      className={
        this.state.isNightModeOn ? "headerNight" : "header"
      }
      >
      <h1>
        To Do List
        <button className= "toggleNightBtn" onClick={ () =>this.setState({
          isNightModeOn: !this.state.isNightModeOn,
        })}>      
          <div><FontAwesomeIcon icon={faMoon}/></div>
        </button>
        
        </h1>
      </div>

      <div className={
        this.state.isNightModeOn ? "wrapperNight" : "wrapper"
      }>

    
    <div className={
        this.state.isNightModeOn ? "taskContainerNight" : "taskContainer"
      } >
    <div className="content-right-group">

        <form 
        className="taskForm" 
        data-task-form
        onSubmit={(e)=> this.addItem(e)}>
            <input type="text" 
            className="taskFormInput" 
            placeholder="What do you need to do?" 
            value = {this.state.newItem}
            onChange = { e => this.updateInput("newItem", e.target.value)}
            maxLength="32"  
            required 
            />
            <input type="submit" 
            className="submitTaskBtn" 
            value="Add Task" 
            />
        </form>
    <ul className="itemList" data-task-list>
      
      {this.state.taskList.map(item => {
        return (
          <li key={item.id}>
            <label className='labelContainer'>
              <input type='checkbox' className='checkbox'/>
                <span className='checkmark'></span>
                <span>{item.value}
                <button 
            className="trashBtn"
            onClick = {()=> this.deleteItem(item.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
                </span>
            </label>
          
          </li>
        )
      })}
    </ul>
    </div> 
</div>

{/* end of wrapper */}
      </div>
    </div>
  );
}
}

export default App;
