import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const Page = ({ routes }) => {
    return (
        <section>
            {
                routes.map((route) => {
                    const { id, path, Component } = route;
                    return (
                        <Route key={id} path={path} exact>
                            {
                                ({ match }) => {
                                    return (
                                        <CSSTransition
                                            in={match != null}
                                            timeout={500}
                                            classNames={"page"}
                                            unmountOnExit
                                        >
                                            <div className="page">
                                                <div className="col-md-10 mx-auto">
                                                    <Component />
                                                </div>
                                            </div>
                                        </CSSTransition>
                                    );
                                }
                            }
                        </Route>
                    );
                })
            }
        </section>
    );
}

export default Page;