import React from 'react';
import './App.css';




class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      newItem:"",
      taskList:[],
    }
    // this.addItem = this.addItem.bind(this);

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
      list,
      newItem: ""
    });
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
        <form className="taskForm" data-task-form>
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
            onClick={(e)=> this.addItem(e)}
            />
        </form>
    <ul className="itemList" data-task-list>
        <li>test item 1 <button className="trashBtn"><i className="fas fa-trash"></i></button></li>
        <li>test item 2</li>
        <li>test item 3</li>
    </ul>
    </div> 
</div>

{/* end of wrapper */}
      </div>
    </div>
  );
}
}




function SubmitTask (e) {
  e.preventDefault();
  console.log('test');
  const taskFormInput = document.querySelector('[data-task-form-input]');
  const tasks = this.state.tasks.slice();
  this.setState({
      tasks: tasks.concat({
          tasks: taskFormInput,
      })
  })

}

export default App;
