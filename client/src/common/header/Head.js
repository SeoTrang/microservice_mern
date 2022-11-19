import React from "react"

const Head = () => {
    return (
        <>
            <section className=" head">
                <div className="container d_flex">
                    <div className="left row"> 
                        <i className="fa fa-phone"></i>
                        <label htmlFor="">+84 386 640 397</label>
                        <i className="fa fa-envelope"></i>
                        <label htmlFor="">seotrangbh24@gmail.com</label>


                    </div>

                    <div className="right row RText">
                        <label>Theme FAQ's</label>
                        <label>Need Helps </label>
                        <span>🇻🇳</span>
                        <label htmlFor="">VI</label>
                        <span>🇺🇸</span>
                        <label htmlFor="" >EN</label>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Head;