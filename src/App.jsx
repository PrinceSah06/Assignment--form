import React, { useState } from 'react';
import DataTable from './componets/DataTable'
import SignupPage from './componets/SingupPage';
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './utils/store';
function App() {
  const [showSignup, setShowSignup] = useState(false);
const columns = [
  { key: "id", title: "ID", dataIndex: "id", sortable: true },
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
  { key: "email", title: "Email", dataIndex: "email" }

  
];

const data = [
  { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
  { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
  { id: 3, name: "Eve", age: 22, email: "eve@example.com" }
];




const router =createBrowserRouter([
  {
    path:'/',
    element:<SignupPage/>,
 
  },  {path:'data',
        element:<DataTable/>
      }

])





  return (<Provider store={store}>
    <RouterProvider router={router}>
        <div>
     
    </div>
    </RouterProvider></Provider>
    
  
  );
}

export default App;










//  {!showSignup ? (
//         <>
//        <DataTable
//   data={data}
//   columns={columns}
//   selectable={true}            // optional: enable row selection
//   loading={false}              // optional: show loading state
//   onRowSelect={(selected) => console.log("Selected rows:", selected)} // optional callback
// />

//           <button
//             onClick={() => setShowSignup(true)}
//             className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//           >
//             Go to Signup
//           </button>
//         </>
//       ) : (
//         <SignupPage />
//       )}