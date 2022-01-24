import React, { useState,useRef } from 'react';
import styles from './Details.module.css';
import logo from '../assets/logoEnalo.jpg';
import { InputGroup, FormControl, Button,Form,Col} from 'react-bootstrap';
import Checkout from './Checkout';

const DetailsForm = () => {
    const [showForm, setShowForm] = useState(true);
    const [isValidated, setValidated] = useState(false);
    const [details, setDetails] = useState({
        purpose: "InstaPay",
        amount: "",
        name: "",
        email:"",
        phone:""
    });
    const nameRef = useRef();
    const purposeRef = useRef();
    const amountRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();

    const [hasError, setError] = useState({ name: false, amount: false, email: false, phone: false });

    const nameChangeHandler = () => {
        setDetails((prev) => { return { ...prev, name: nameRef.current.value, } });
    }
    const purposeChangeHandler = () => {
        setDetails((prev) => { return { ...prev, purpose: purposeRef.current.value, } });
    }
    const amountChangeHandler = () => {
        setDetails((prev) => { return { ...prev, amount: amountRef.current.value, } })
        if (details.amount > 9) {
            setError(prev=>{return {...prev,amount:false}})
        }
    }
    const phoneChangeHandler = () => {
        setDetails((prev)=>{ return {...prev,phone: phoneRef.current.value,}})
    }
    const emailChangeHandler = () => {
        setDetails((prev) => { return { ...prev, email: emailRef.current.value, } });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(details);
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
        setShowForm(false);
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img className={styles.logo} src={logo} alt="app-logo"/>
                <div className={styles.title}>
                    <span className={styles.titleSpan}>Paying to</span>
                    <span className={styles.titleSpan}>Exposys Data Labs</span>
                </div>
            </div>
            {showForm && (<div className={styles.formContainer}>
                <Form validated={isValidated} onSubmit={onSubmit}>
                    <label className={styles.labels}>Purpose of Payment</label>
                    <InputGroup className="mb-3" >
                        <FormControl
                            type="text"
                            ref={purposeRef}
                            aria-describedby="basic-addon1"
                            onChange={purposeChangeHandler}
                            maxLength={50}
                        />
                    </InputGroup>
                
                    <Form.Group as={Col} controlId="amountInputForm">
                        <label className={styles.labels}>Amount</label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">₹</InputGroup.Text>
                            <FormControl
                                type="number"
                                ref={amountRef}
                                aria-describedby="basic-addon1"
                                onChange={amountChangeHandler}
                                isValid={hasError.amount}
                                value={details.amount}
                                min={10}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid amount.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                
                    <Form.Group as={Col} controlId="nameInputForm">
                        <label className={styles.labels}>Name</label>
                        <InputGroup className="mb-3">
                            <FormControl
                                ref={nameRef}
                                aria-describedby="basic-addon1"
                                onChange={nameChangeHandler}
                                value={details.name}
                                isValid={hasError.name}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid name
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col} controlId="emailInputForm">
                        <label className={styles.labels}>Email</label>
                        <InputGroup className="mb-3">
                            <FormControl
                                type="mail"
                                ref={emailRef}
                                aria-describedby="basic-addon1"
                                onChange={emailChangeHandler}
                                value={details.email}
                                isValid={hasError.email}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    
                    <Form.Group as={Col} controlId="phoneInputForm">
                        <label className={styles.labels}>Phone Number</label>
                        <InputGroup className="mb-3">
                            <FormControl
                                ref={phoneRef}
                                aria-describedby="basic-addon1"
                                onChange={phoneChangeHandler}
                                isValid={hasError.phone}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Button variant="success" type="submit" className={styles.button}>Next</Button>
                </Form>
            </div>)}
            {!showForm && <Checkout details={details}/>}
        </div>
    );
};

export default DetailsForm;
