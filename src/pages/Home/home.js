import React, {useState} from "react";


const Home = (props) => {
    const [number, setNumber] = useState(undefined);

    const changeNumber = (e) => {
        if (e.target.value < 0) {
            setNumber(0)
        } else {
            setNumber(e.target.value);
        }
    }

    const nFibonacciNumber = (e) => {
        e.preventDefault();
        let n = parseInt(number)
        let s5 = Math.pow(5, .5)
        let phi = (1+ s5)/2.0;
        let a = Math.pow(phi, n);
        let b = Math.pow(-phi, -n);
        let result = Math.round((a - b)/s5)
        props.setCurrentValue(result)
    }


    const showNumber = () => {
        if(props.currentValue !== undefined){
            return <div>{props.currentValue.toString()}</div>
        } else {
            return <div></div>
        }
    }

    return (
        <div>
            <form>
                <input value={number} onChange={(e) => changeNumber(e)} type="number"/>
                <button onClick={(e) => nFibonacciNumber(e)}>Submit</button>
            </form>
            {
                showNumber()
            }
        </div>

    )
}

export default Home;