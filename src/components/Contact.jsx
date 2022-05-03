import React from "react"

import Button from "./Button"

import ContactStyle from "../style/contact.css"

const buttonValue = "send"

function Contact() {
    return (
        <section className="contactContainer container w-50">
                <h2 className="fw-normal fs-4 text-uppercase ">Contact</h2>
                <form className="row g-4">
                    <div className="col-6">
                        <input type="text" placeholder="First name" className="border rounded-3 border-1 border-secondary p-2 w-100"/>
                    </div>
                    <div className="col-6">
                        <input type="text" placeholder="Last name" className="border rounded-3 border-1 border-secondary p-2 w-100" />
                    </div>
                    <div className="col-12">
                        <input type="text" placeholder="Mail adress" className="border rounded-3 border-1 border-secondary p-2 w-100" />
                    </div>
                    <div className="col-12">
                        <textarea name="" placeholder="Message" rows="10" className="border rounded-3 border-1 border-secondary p-2 w-100"></textarea>
                    </div>
                </form>
                <Button
                    background="none"
                    padding="10px 40px"
                    borderStyle="solid"
                    borderWidth="2px"
                    borderColor="#BC9A44"
                    marginTop="55px"
                    textTransform="uppercase"
                    children={buttonValue}
                    />
        </section>
    )
}

export default Contact