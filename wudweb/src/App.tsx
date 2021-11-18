import './static/css/App.css';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { ChatPage, LoginPage } from './pages';

function App() {
  	return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    {/* <Route index element={<ChatPage />} /> */}

                    <Route path="/login">
                        <Route index element={<LoginPage />} />
                    </Route>
                    <Route path="/chat">
                        <Route index element={<ChatPage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
	);
}



export default App;
