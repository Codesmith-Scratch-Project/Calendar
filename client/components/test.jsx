import React, { useEffect } from 'react';

const New = props => {

    // const btn = useRef(null);

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log('asd');
    }


    // useEffect( () => {
    //     console.log('in useeffect');

        
    // }, [btn])
    return (
        <div>
            <button onClick={() => console.log('sdsd')}>

            </button>
            {/* <form onSubmit={handleSubmit}> */}
                {/* <label>
                Name:
                <input 
                    type="input"
                    name="name"
                />
                </label> */}
                {/* <button type="submit">click</button> */}
            {/* </form> */}
        </div>
    )
}

export default New;