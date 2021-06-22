import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
    position: "fixed",
    right: "20px",
    bottom: "100px",
    borderRadius: "15px",
    color: "#fff"
}

const transitionStyles = {
    entering: {
        opacity: 0,
        transform: "scale(0.9)",
    },
    entered: {
        opacity: 1,
        transform: "translateX(0)",
        transition: `opacity ${duration}ms, transform ${duration}ms`
    },
    exiting: {
        transform: 'translateX(100%)',
        transition: `transform ${duration}ms ease-in-out`
    },
    exited: {
        right: '-300px'
    }
};

const Message = ({ message, type }) => {
    return (
        <div className={`message message-${type}`}>
            <p className="px-5 py-2 m-0">
                {message}
            </p>
        </div>
    );
}

const Notification = ({ notif }) => {
    const { show, message, type } = notif
    return (
        <Transition in={show} timeout={duration} unmountOnExit>
            {
                (state) => (
                    <div style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}>
                        <Message message={message} type={type} />
                    </div>
                )
            }
        </Transition>
    );
}

export default Notification;