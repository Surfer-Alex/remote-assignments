import { useState } from 'react';

const Body = () => {
    const [message,setMessage] = useState('Welcome Message');
    function change () {
        setMessage('Have a GoodTime!') 
    }

    const [showContent,setShowcontent] = useState(false);
    
           
    function show (){
        setShowcontent( !showContent);
      }
    
    return (
        <div>
            <div className="banner">
                <h1 className="headline" onClick={change}>{message}</h1>
            </div>

            <div className="section">
                <h2>Section Title</h2>
            </div>

            <div className="container">    
                <div className="item">
                    <h3>Content Box 1</h3>
                </div>
                <div className="item">
                    <h3>Content Box 2</h3>
                </div>
                <div className="item">
                    <h3>Content Box 3</h3>
                </div>
                <div className="item">
                    <h3>Content Box 4</h3>
                </div>
            </div>

            <footer className="footer">
                <div className="item1">
                    <h3 onClick={show}>Call to Action</h3>    
                </div>
            </footer>
            
            {showContent && (
                <div className="container" >
                    <div className="item">
                        <h3>Content Box 5</h3>
                    </div>
                    <div className="item">
                        <h3>Content Box 6</h3>
                    </div>
                    <div className="item">
                        <h3>Content Box 7</h3>
                    </div>
                    <div className="item">
                        <h3>Content Box 8</h3>
                    </div>
                </div>
                )}    
        </div>
    );
}

export default Body