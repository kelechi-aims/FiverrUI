import React from "react";
import "./Message.scss";
import { Link } from "react-router-dom";

const Message = () => {
    return (
        <div className="message">
            <div className="container">
                <span className="breadcrumbs">
                    <Link className="link" to="messages">Messages</Link> &gt; John Deo &gt;
                </span>
                <div className="messages">
                    <div className="item">
                        <img src="/images/kacey.jpeg" alt="" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum id dolore et consequuntur sapiente natus, reiciendis sequi molestiae numquam ea incidunt totam praesentium distinctio dicta earum nemo! Eius, laboriosam delectus.</p>
                    </div>
                    <div className="item owner">
                        <img src="/images/kacey.jpeg" alt="" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum id dolore et consequuntur sapiente natus, reiciendis sequi molestiae numquam ea incidunt totam praesentium distinctio dicta earum nemo! Eius, laboriosam delectus.</p>
                    </div>
                    <div className="item">
                        <img src="/images/kacey.jpeg" alt="" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum id dolore et consequuntur sapiente natus, reiciendis sequi molestiae numquam ea incidunt totam praesentium distinctio dicta earum nemo! Eius, laboriosam delectus.</p>
                    </div>
                    <div className="item owner">
                        <img src="/images/kacey.jpeg" alt="" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum id dolore et consequuntur sapiente natus, reiciendis sequi molestiae numquam ea incidunt totam praesentium distinctio dicta earum nemo! Eius, laboriosam delectus.</p>
                    </div>
                    <div className="item">
                        <img src="/images/kacey.jpeg" alt="" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum id dolore et consequuntur sapiente natus, reiciendis sequi molestiae numquam ea incidunt totam praesentium distinctio dicta earum nemo! Eius, laboriosam delectus.</p>
                    </div>
                    <div className="item owner">
                        <img src="/images/kacey.jpeg" alt="" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum id dolore et consequuntur sapiente natus, reiciendis sequi molestiae numquam ea incidunt totam praesentium distinctio dicta earum nemo! Eius, laboriosam delectus.</p>
                    </div>
                </div>
                <hr />
                <div className="write">
                    <textarea name="" id="" placeholder="write a message" cols="30" rows="10"></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
};

export default Message;

