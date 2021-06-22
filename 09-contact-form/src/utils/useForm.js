import { useEffect, useRef, useState } from "react";

const useForm = (callback, validate) => {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: ""
    };

    const [values, setValues] = useState(initialValues);
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [touched, setTouched] = useState([]);

    const [number, setNumber] = useState(0);
    const textLimitRef = useRef(null);
    const max = 1000;
    const textLimit = `Maximum ${max}. Restant ${max - number}`;

    const handleChange = (ev) => {
        setValues((prevProps) => ({
            ...prevProps,
            [ev.target.name]: ev.target.value
        }));
    }

    const handleBlur = (ev) => {
        setValues((prevProps) => ({
            ...prevProps,
            [ev.target.name]: ev.target.value
        }));

        if (!touched.includes(ev.target.name)) {
            setTouched([...touched, ev.target.name]);
        }
    }

    const handleChangeArea = (ev) => {
        setNumber(ev.target.value.length);
        textLimitRef.current.style.color = max === number + 1 ? "red" : "";
        setMessage(ev.target.value);
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        setErrors(validate({ ...values, message }));
        setIsSubmitting(true);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback(values);
        }
    }, [errors])

    useEffect(() => {
        const errorsOnBlur = validate({ ...values, message });
        const errorsTouched = Object.keys(errorsOnBlur)
            .filter((item) => touched.includes(item))
            .reduce((acc, current) => {
                if (!acc[current]) {
                    acc[current] = errorsOnBlur[current];
                }
                return acc;
            }, {});
        setErrors(errorsTouched);
        setIsSubmitting(false);
    }, [touched, values, message])

    return { values, message, handleChange, handleBlur, handleChangeArea, max, textLimitRef, textLimit, handleSubmit, errors };
}

export default useForm;