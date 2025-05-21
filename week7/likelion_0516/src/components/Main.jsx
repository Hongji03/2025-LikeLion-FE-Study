import React from 'react'
import Section01 from './Main_Section/Section01'
import Section02 from './Main_Section/Section02'
import Section03 from './Main_Section/Section03'
import Section04 from './Main_Section/Section04'
import Section05 from './Main_Section/Section05'

const Main = () => {
    return (
        <div className='main_wrap'>
            <Section01 />
            <Section02 />
            <Section03 />
            <Section04 />
            <Section05 />
        </div>
    )
}

export default Main