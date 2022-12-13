// import React, {useState} from 'react';




import Task from "../Components/Task/Task";
import styles from "./app.module.css"

// Redux


const App = () => {

    return(
        <div  className={styles.container}>
            
            <button  >Add in Redux </button>

            <div style={{"display" : "flex", gap:"20px"}}>

            </div>

            <Task />
        </div>
    
    );
}

export default App;