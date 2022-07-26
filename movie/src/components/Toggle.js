import React, {useState} from 'react';
import styled from 'styled-components';

const Toggle = ({children, backG}) => {
    const [toggle, setToggle] = useState(false);

    return(
    <ToggleStyle backG={backG} onClick={()=> setToggle(!toggle)}>
        <div><li style={{display: 'inline'}}>SELECT MOVIE TYPE</li>
            <li style={{display: 'inline', color: '#6b6425', margin:'0 1rem'}}>{toggle? 'X':'>'}</li>
        </div>
        {toggle?children: ''}
    </ToggleStyle>)
}

const ToggleStyle = styled.div`
    cursor: pointer;
    text-align: right;
    color: ${({backG})=> backG? '#fff': 'rgb(36, 35,35)'};
`
export default Toggle