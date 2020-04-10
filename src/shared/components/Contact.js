import React, { useState, useEffect } from 'react'

const Contact = () => {
    let [contact,setContact]=useState({
        email:'',
        subject:'',
        message:''
    });

    let [touched,setTouched]=useState({
        email:false,
        subject:false,
        message:false
    });

    let onChange=(e)=>{
       setContact({
            ...contact,
            [e.target.name]:e.target.value
        });
    }

    let onBlur=(e)=>{
        setTouched({
             ...contact,
             [e.target.name]:true
         });
     }

    let validate=()=>{
        var errors={};

        if(!contact.email || contact.email==""){
            errors.email="Email is required"
        }

        if(!contact.subject || contact.subject==""){
            errors.subject="Subject is required"
        }

        if(!contact.message || contact.message==""){
            errors.message="Message is required"
        }

        return {
            errors,
            isValid: Object.keys(errors).length==0?true:false
        }
    }

    let submit=()=>{
        
    }

    useEffect(()=>{
        console.log(contact)
    },[contact])

    var {errors,isValid}=validate();

    return (
        <div>
            <h1>Contact</h1>
            <div>
                <div>
                    <label>
                        Email
                </label>
                    <input type="text" onBlur={onBlur} onChange={onChange} name="email" />
                    <div>
                        {
                            errors.email && touched.email==true && <span style={{color:"red"}}>Email is required</span>
                        }
                    </div>
                </div>
                <div>
                    <label>
                        Subject
                </label>
                    <input type="text" onBlur={onBlur} onChange={onChange} name="subject" />
                    <div>
                        {
                            errors.subject && touched.subject==true && <span style={{color:"red"}}>Subject is required</span>
                        }
                    </div>
                </div>
                <div>
                    <label>
                        Message
                </label>
                    <input type="text" onBlur={onBlur} onChange={onChange} name="message" />
                    <div>
                        {
                            errors.message && touched.message==true && <span style={{color:"red"}}>Message is required</span>
                        }
                    </div>
                </div>
                <button onClick={submit} disabled={!isValid}>Submit</button>
            </div>
        </div>
    )
}

export default Contact;