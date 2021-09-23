import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <>
            <header className="py-3 mb-4 border-bottom">
                <div className="container d-flex flex-wrap justify-content-center">
                    <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
                        <span className="fs-4">Testing Example</span>
                    </a>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0">
                        <input type="search" className="form-control" placeholder="search..." aria-label="search" />
                    </form>
                </div>
            </header>
            <div className="container">
                <div className="p-5 mb-4 bg-light rounded-3 border" >
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Why do we need Test ?</h1>
                        <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut magnam tempore blanditiis vitae dolor dolorum quisquam placeat? Cumque iusto consequatur voluptatibus delectus eius nostrum. Et natus voluptatem alias ratione.</p>
                        <Link to="/users"><button className="btn btn-primary btn-lg" type="button">User List</button></Link>
                    </div>
                </div >
            </div>
            <footer className="text-muted py-5 border-top">
                <div className="container">
                    <p className="mb-1">This is My First React app in Bootstrap</p>
                    <p className="mb-0">New to React? <a href="https://reactjs.org/">Visit the homepage</a></p>
                </div>
            </footer>
        </>
    )
}