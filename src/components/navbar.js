import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar">
        <a href="#">Anasayfa</a><br></br>
        <a href="#">Hakkımızda</a><br></br>
        <a href="#">İletişim</a><br></br>
        <a href="#">Bize Ulaşın</a><br></br>
    </div>
  )
}


//functional componenets oluşturmanın 2.yolu
export const Alt_Navbar=()=>{
    return(
        <div className="alt_navbar">

        </div>
    )
}
