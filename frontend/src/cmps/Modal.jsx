
import React from 'react';
import { Link } from "react-router-dom";


export function Modal(props) {

    return (
        <div id="myModal" className={`modal ${props.showMode}`} onClick={() => {
            props.onCloseModal()
        }} >
            <div className="modal-content">
                <div className="modal-header">
                    <h2>THANK YOU</h2>
                    <h4>For shopping with us,
                    and supporting local farms!
                    </h4>
                </div>
                <div className="modal-body">
                    <img className="basket" src="https://image.flaticon.com/icons/svg/2934/2934085.svg" alt="" />
                    <h5>a confirmation email will be sent to you soon...</h5>

                </div>
                <div className="modal-footer">
                    <Link to="/">
                        <h3>

                            <button className="close" to={`/items`} onClick={() => {
                                props.onCloseModal()
                            }}>Continue Shopping</button></h3>
                    </Link>
                </div>
            </div>

        </div>
    )
}
