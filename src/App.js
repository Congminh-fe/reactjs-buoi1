import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Body from './Body/Body.js';
import Footer from './Footer/Footer';

function App() {
    return (
        <div>
            <div style={
                {
                    background: "black",
                    color: "white",
                    padding: "8px 0"
                }
            }>
                <Header/>
            </div>
            {/* body */}
            <div className='pt-5'>
                <Body/>
            </div>
            <div><Footer/></div>
        </div>
    );
}

export default App;
