import React from 'react'
import Footer from '../../common/footer/footer'
import Header from '../../common/header/header'

const MainLayout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default MainLayout
