import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


function Testfunc() {
  for (var item of this.state.taskList) {
    console.log(item)}
  }

class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      newItem:"",
      taskList:[],
    }
    // this.addItem = this.addItem.bind(this);

  }


  deleteItem(id) {
    console.log(id);
    const list = [...this.state.taskList];

    const updatedList = list.filter(item => item.id !==id)

    this.setState({
      taskList: updatedList,
    })

  }

  addItem(e) {
    
    console.log(this.props)
    console.log(e.target)
    e.preventDefault();

    // this.props.preventDefault();
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    }

    const list = [...this.state.taskList];
    console.log(list)

    list.push(newItem)
    console.log(list)

    console.log(this.state.list)
    this.setState({
      taskList: list,
      newItem: ""
    });
    return (
      <Testfunc/>
    )
  }
  
  updateInput(key, value) {
    this.setState({
      [key]:value
    })
  }
  render(){
  return (
    <div>
      <div className="wrapper">

      <div className="header">
      <h1><u>To Do List</u></h1>
      </div>

    <div className="taskContainer" data-task-container>
    <h2><u>TASKS</u></h2>   
    <div className="content-right-group">
        <div className="noProjectSelected">
            {/* <h3>Please select or create a new project!</h3> */}
        </div>
        <form 
        className="taskForm" 
        data-task-form
        onSubmit={(e)=> this.addItem(e)}>
            <input type="text" 
            className="taskFormInput" 
            placeholder="What do you need to do?" 
            value = {this.state.newItem}
            onChange = { e => this.updateInput("newItem", e.target.value)}
            maxLength="32"  data-task-form-input 
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
