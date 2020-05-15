import React, {useState} from 'react';
// comment here
export default function Exam() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked {count} times here</p>
            <button onClick = {()=> setCount(count + 1) }>
                Click Me
            </button>
        </div>
    )
}