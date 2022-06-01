
//import './App.css';
//import HomePage from './HomePage';
//import Home from './Home';
//import NavBar from './NavBar';
//import like from './like.svg';



    // <div className="container">
    // <div className="form-image">
    //     <img src={like} alt="like" />
    // </div>
    // <div className="form">
    //     <form action="#" />
    //         <div className="form-header">
    //             <div className="title">
    //                 <h1>ORDER FORM</h1>
    //             </div>
             
    //         </div>
            

    //         <div className="input-group">
    //             <div className="input-box" 
    //             style={{
    //               width: '242px'
    //             }}
    //               >
    //                 <label for="firstname">Job Title</label>
    //                 <span></span>
    //                 <input type="text"   id="firstname" name="firstname" placeholder="" required />
    //                 <span id="firstnameSpan"></span> 
    //             </div>
                

              
    //                   <div className="input-box" 
    //                   style={{
    //                     width: '269px'
    //                   }}
    //                     >
    //                 <label for="lastname">Requested BY</label>
    //                 <input type="text"   id="lastname" name="lastname" placeholder="" required />
    //                 <span id="lastNameSpan"></span>
    //             </div>

    //             <div className="mb-3">
    //                 <label for="formGroupExampleInput" className="form-label">Job Location</label>
    //                 <input type="text"      className="form-control" id="formGroupExampleInput" placeholder="" 
    //                 style={{
    //                   width: '532px'
    //                 }}
    //                   />
    //               </div>
                  
    //             <div className="input-box" >
    //                 <label for="email">Date Expected Tocomplete Erection</label>
    //                 <input type="date"   id="email" name="email" placeholder="" required />
    //                 <span id="emailSpan"></span>
    //             </div>

    //             <div className="input-box" >
    //                 <label for="number">Date Expected To Completed Dismantle</label>
    //                 <input type="date"   id="number" name="number" placeholder="" required />
    //                <span id="numberSpan"></span> 
    //             </div>

                
               
    //               <div className="col-sm-3">
    //                 <label for="inputState" className="form-label">Dimension</label>
    //                 <div className="input-group">
    //                   <div className="input-group-text">length</div>
    //                   <input type="text" className="form-control" id="specificSizeInputGroupUsername" placeholder="" />
    //                 </div>
    //               </div>

    //               <div className="col-sm-3">
    //                 <label for="inputState" className="form-label">Dimension</label>
    //                 <div className="input-group">
    //                   <div className="input-group-text">width</div>
    //                   <input type="text" className="form-control" id="specificSizeInputGroupUsername" placeholder="" />
    //                 </div>
    //               </div>
    //               <div className="col-sm-3">
    //                 <label for="inputState" className="form-label">Dimension</label>
    //                 <div className="input-group">
    //                   <div className="input-group-text">height</div>
    //                   <input type="text" className="form-control" id="specificSizeInputGroupUsername" placeholder="" />
    //                 </div>
    //               </div>
                   
    //               <div className="col-md-4" 
    //               style={{
    //                 width:'241px'
    //               }}
    //               >
    //                 <label for="inputState" className="form-label">Sccafold Type</label>
    //                 <select id="inputState" className="form-select">
    //                   <option selected>Choose...</option>
    //                   <option>...</option>
    //                 </select>
    //               </div>
    //               <div className="col-md-4" 
    //               style={{
    //                 width:'271px'
    //               }}
    //               >
    //                 <label for="inputState" className="form-label">Material Count</label>
    //                 <select id="inputState" className="form-select">
    //                   <option selected>Choose...</option>
    //                   <option>...</option>
    //                 </select>

    //                 <span class="RegisterButton">
    //                 <input type="button"  value="Submit" />
    //                 <input type="button"    value="Export Data" />
    //                 <input type="button"    value="Reset" />

    //             </span>
    //               </div>

    //         </div>
    //         </div>
    //         </div>
import './index.css';
import Navbar from './NavBar';
import Home from './Home';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;