import { useState } from 'react'
import './App.css'



function App() {

  const [firstSection, setFirstSection] = useState({
    firstName: '',
    lastName: '',
    email:''
  });
  const validateEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  function isEmailValid(email){
    return validateEmailRegex.test(email);
  }
  let [notSub,Sub]=useState(false);

  function handleEvent(e){
    e.preventDefault();
    if (isEmailValid(firstSection.email)){
      Sub(!notSub);
    }else {
      
      alert("enter gmail value correctly")
    }
  }

 
  if(notSub){
    return (  
      
      <div className="min-h-screen w-[1000px] bg-gray-800 flex items-center justify-center p-4">
      <div className="w-[1000px] text-left text-white space-y-4">
        <div>
          <span className="text-2xl font-bold">{firstSection.firstName}</span>
          <span> </span>
          <span className="text-2xl font-bold">{firstSection.lastName}</span>
        </div>
        <p className="text-2xl font-bold">{firstSection.email}</p>
        <button style={{marginTop: '20px', backgroundColor: 'white', color: 'black'}} onClick={()=>{
              Sub(false);
            }}>Edit</button>
       </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen min-w-[1000px] bg-gray-800 flex items-center justify-center p-4">
     <div className="w-full text-left text-white space-y-6">
     <div className="space-y-2">
      <label className="block text-lg text-gray-300">
          First Name:
      </label>
        <input className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-gray-400 placeholder-gray-400"
          value={firstSection.firstName}
          placeholder='type...'
          onChange = {e =>{ setFirstSection({...firstSection,firstName:e.target.value});
                      
          }}
          
        />
        
      </div>
      <div className="space-y-2">
        <label className="block text-lg text-gray-300">
          Last Name:
        </label>
        <input className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-gray-400 placeholder-gray-400"
          value={firstSection.lastName}
          placeholder='type...'
          onChange = {e =>{ setFirstSection({...firstSection, lastName:e.target.value});
            
          }}
          
        />
        

      </div>
      <div className="space-y-2">
        <label className="block text-lg text-gray-300">
          Email id:
        </label>
          <input className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-gray-400 placeholder-gray-400"

            value={firstSection.email}
            placeholder='type...'
            onChange = {e =>{setFirstSection({...firstSection, email:e.target.value});
              
            }}
            
          />
        
      </div>
     <button className="w-full mt-6 px-6 py-3 bg-white rounded font-medium hover:bg-gray-100 transition-colors"
     type="submit" onClick={(e)=>{ handleEvent(e);
      alert("your form has been submitted successfully");
     }}
     >submit</button>
     </div>
    </div>
  );
}

export default App
