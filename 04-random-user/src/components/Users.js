import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Card from "./Card";

const url = "https://randomuser.me/api/?results=20";

const Users = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [users, setUsers] = useState([]);
    const [index, setIndex] = useState(0);
    const [info, setInfo] = useState("");

    const fetchUsers = () => {
        setLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(
                (data) => {
                    const { results } = data
                    const newUsers = results.map((user, index) => {
                        const { first, last } = user.name;
                        const { country } = user.location;
                        const { email } = user;
                        const { username } = user.login
                        const { cell } = user;
                        const { large } = user.picture;

                        return {
                            id: index + 1,
                            name: first + ' ' + last,
                            country: country,
                            email: email,
                            username: username,
                            phone: cell,
                            image: large
                        };
                    })
                    setUsers(newUsers)
                    setLoading(false)
                },
                (error) => {
                    setLoading(true)
                    setError(error)
                }
            )
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    const verifyIndex = (number) => {
        if (number > users.length - 1) {
            return 0;
        }

        if (number < 0) {
            return users.length - 1;
        }

        return number;
    };

    const nextUser = () => {
        setInfo();
        setIndex((index) => {
            let newIndex = index + 1;
            return verifyIndex(newIndex);
        });
    };

    const prevUser = () => {
        setInfo();
        setIndex((index) => {
            let newIndex = index - 1;
            return verifyIndex(newIndex);
        });
    };

    const getInfo = (data) => {
        setInfo(data);
    }

    if (error) {
        return (
            <div className="text-center error-container">
                <h2 className="mb-4 text-danger">
                    Une erreur est survenue
                </h2>
                <button className="btn btn-danger" onClick={() => document.location.reload()}>Actualiser</button>
            </div>
        );
    } else if (loading) {
        return (
            <div className="d-flex justify-content-center loader-container">
                <div className="loader"></div>
            </div>
        );
    } else {
        return (

            <div className="users">
                <Card info={info} getInfo={getInfo} {...users[index]} />
                <div className="mt-5 text-center btn-control">
                    <button className="mx-2 btn btn-secondary" onClick={prevUser}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button className="mx-2 btn btn-secondary" onClick={nextUser} >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
        );
    }
}

export default Users;