import React from 'react';
// import HomePage from './pages/HomePage';
import {Provider} from './AppContext'
// import HocPage from './pages/HocPage';
// import UserPage from "./pages/UserPage";
// const Context = React.createContext();
// const Provider = Context.Provider;// 提供者
// const Consumer = Context.Consumer;// 消费者

import HookPage from "./pages/HookPage";
import UseReducer from "./pages/UseReducer";
import UseContext from "./pages/UseContext";

import './App.css'
function Child(props) {
    return <div>
        {/* <p>{props.user.name}</p> */}
    </div>
}
const store = {
    user: {
        name: 'winny00'
    }
}
function App() {
  return (
    <div className="App">
        <Child {...store}/>
            <Provider value={store}>
                {/* <Consumer>
                    {
                      ctx => <Child {...ctx} />
                    }
                   
                </Consumer> */}
              {/* <Consumer>
                  {
                      ctx => <HomePage {...ctx} />
                  }
              </Consumer> */}
              {/* <HomePage/> */}
              {/* <HocPage></HocPage> */}
              {/* <UserPage /> */}
              {/* <HookPage /> */}
              {/* <UseReducer /> */}
              <UseContext />
            </Provider>
    </div>
  );
}

export default App;
