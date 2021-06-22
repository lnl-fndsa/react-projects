const validateData = (state) => {
    let errors = {};
    const regexEmail = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;

    if (!state.lastName.trim()) {
        errors.lastName = "Votre nom est obligatoire";
    }

    if (!state.firstName) {
        errors.firstName = "Votre prénom est obligatoire";
    }

    if (!state.email) {
        errors.email = "Votre mail est requis";
    } else if (!regexEmail.test(state.email)) {
        errors.email = "Le mail est invalide";
    }

    if (!state.message) {
        errors.message = "Un message est requis";
    }

    return errors;
}

export default validateData;