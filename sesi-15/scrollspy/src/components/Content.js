import React from 'react'
import {
    Switch,
    Route,
    useParams,
    NavLink,
    useRouteMatch
} from "react-router-dom";
import Detail from './Detail';

function Content() {
    let { id } = useParams();
    let { path, url } = useRouteMatch()
    return (
        <div className="p-5 mb-4 bg-light rounded-3 border col-md-12">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold text-capitalize">{id}</h1>
                <NavLink to={`${url}/detail-${id}`}><button className="btn btn-secondary btn-lg w-100 mt-2" type="button">Detail</button></NavLink>
                <Switch>
                    <Route path={`${path}/:detail`}>
                        <Detail />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Content