import React from 'react'
import {useState} from 'react';

const Contact = () => {
    const [fdata, setData] = useState({
        fullname: "",
        email: "",
        phone: "",
        message: ""
    });

    const inputEvent = (event) =>{
        const {name, value} = event.target;

        setData((preVal) =>{
            return {
                ...preVal,
                [name] : value,
            }
        })
    };

    const submitForm = (event) =>{
        event.preventDefault();
        alert(`My Name is ${fdata.fullname}. I am using an email : ${fdata.email} and phone : ${fdata.phone}.
                My message to owner : ${fdata.message}`)
    };

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={submitForm}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input type="text" class="form-control"
                                    name="fullname" value={fdata.fullname } onChange={inputEvent}
                                    id="exampleFormControlInput1" placeholder="Enter Your Full Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control"
                                    name="email" value={fdata.email } onChange={inputEvent}
                                    id="exampleFormControlInput1" placeholder="Enter Your Email" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                <input type="phone" class="form-control"
                                    name="phone" value={fdata.phone } onChange={inputEvent}
                                    id="exampleFormControlInput1" placeholder="Enter Your Mobile Number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                    name="message" value={fdata.message } onChange={inputEvent}></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn-style" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;

