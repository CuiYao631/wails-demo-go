import {useState} from 'react';
import logo from './assets/images/logo-universal.png';
import help from './assets/images/help.png';
import './App.css';
import {Greet} from "../wailsjs/go/main/App";

function App() {
    const [resultText] = useState("wails demo 功能示例");
    const [name, setName] = useState('');
    const updateName = (e) => setName(e.target.value);
    const updateResultText = (result) => setResultText(result);

    // 使用状态管理点击后文字的显示和隐藏
    const [showTooltip, setShowTooltip] = useState(false);

    // 处理叹号点击事件
    const handleTooltipClick = () => {
        setShowTooltip(!showTooltip);
    };

    function greet() {
        Greet(name).then(updateResultText);
    }


    return (
        <div id="App">
            <div id="result" className="result">{resultText}</div>
            <div className="grid-container">
                <div id="input" className="input-box" onClick={handleTooltipClick}>
                    <div className="item-text">Events On</div>
                    <div className="tooltip">
                        <img className="exclamation" src={help}/>
                        {showTooltip && (
                        <span className="tooltip-text">此方法为给定的事件名称设置一个侦听器。 当 触发指定事件 名为 eventName 类型的事件时，将触发回调。 与触发事件一起发送的任何其他数据都将传递给回调。 它返回 一个函数来取消侦听器</span>
                        )}
                    </div>
                    <button className="btn" onClick={greet}>EventsOn</button>
                </div>

                <div id="input" className="input-box">
                    <div className="item-text">功能2</div>
                    <input id="name" className="input" onChange={updateName} autoComplete="off" name="input" type="text"/>
                    <button className="btn" onClick={greet}>Greet</button>
                </div>
                <div id="input" className="input-box">
                    <div className="item-text">功能3</div>
                    <input id="name" className="input" onChange={updateName} autoComplete="off" name="input" type="text"/>
                    <button className="btn" onClick={greet}>Greet</button>
                </div>
                <div id="input" className="input-box">
                    <div className="item-text">功能4</div>
                    <input id="name" className="input" onChange={updateName} autoComplete="off" name="input" type="text"/>
                    <button className="btn" onClick={greet}>Greet</button>
                </div>
                <div id="input" className="input-box">
                    <div className="item-text">功能5</div>
                    <input id="name" className="input" onChange={updateName} autoComplete="off" name="input" type="text"/>
                    <button className="btn" onClick={greet}>Greet</button>
                </div>
                <div id="input" className="input-box">
                    <div className="item-text">功能6</div>
                    <input id="name" className="input" onChange={updateName} autoComplete="off" name="input" type="text"/>
                    <button className="btn" onClick={greet}>Greet</button>
                </div>
                <div id="input" className="input-box">
                    <div className="item-text">功能7</div>
                    <input id="name" className="input" onChange={updateName} autoComplete="off" name="input" type="text"/>
                    <button className="btn" onClick={greet}>Greet</button>
                </div>
                <div id="input" className="input-box">
                    <div className="item-text">功能8</div>
                    <input id="name" className="input" onChange={updateName} autoComplete="off" name="input" type="text"/>
                    <button className="btn" onClick={greet}>Greet</button>
                </div>
                <div id="input" className="input-box">
                    <div className="item-text">功能9</div>
                    <input id="name" className="input" onChange={updateName} autoComplete="off" name="input" type="text"/>
                    <button className="btn" onClick={greet}>Greet</button>
                </div>
            </div>

        </div>
    )
}

export default App
