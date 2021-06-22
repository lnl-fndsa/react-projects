import { useState } from "react";

const Success = ({ setIsSubmitted, data }) => {
    const [fakeTimer, setFakeTimer] = useState(false);

    setTimeout(() => {
        setFakeTimer(true)
    }, 2000);

    return (
        <div className="py-4 px-5 col-md-6 mx-auto d-flex justify-content-center align-items-center form-success">
            {
                fakeTimer ?
                    <div className="text-center">
                        <h2>Bravo !</h2>
                        <p>Votre formulaire a été enregistré</p>
                        <p>Merci pour votre message</p>
                        <div className="px-3 py-2 text-start code">
                            <p className="m-0">
                                {
                                    (data.lastName + " " + data.firstName).substring(0, 15) + " ..."
                                }
                            </p>
                            <p className="m-0">
                                {data.email.substring(0, 30) + " ..."}
                            </p>
                            <p className="m-0">
                                {data.message.substring(0, 10) + " ..."}
                            </p>
                        </div>
                        <button className="btn btn-secondary close" onClick={() => setIsSubmitted(false)}>&times;</button>
                    </div> :
                    <div className="loader"></div>
            }
        </div >
    );
}

export default Success;