import React from 'react'
import {useParams} from 'react'

function Useparam() {
    let {username,mobilephone,email,psw,psw_repeat} = useParams()

    console.log("useParam : ");
    console.log(username,mobilephone,email,psw,psw_repeat);
    
}

export default Useparam
