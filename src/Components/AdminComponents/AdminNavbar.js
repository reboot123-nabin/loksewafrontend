import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

function AdminNavbar() {

    return (
        <>
            <div className="sidenavigation">
                <div className="sidenavigation1">
                    <nav className="admin-nav" id="sidebar">
                        <div className="sidebar-header">
                            <h3>Yess Quiz</h3>
                        </div>

                        <ul className="list-unstyled components">
                            <p>Poject Overview</p>
                            <li className="active">
                                <NavLink to="#homeSubmenu" data-toggle="collapse" aria-expanded="false" >Authentication</NavLink>
                            </li>
                            <li>
                                <NavLink to ="add-question">Add Question</NavLink>
                            </li>
                            <li>
                                <NavLink to="#homeSubmenu" data-toggle="collapse" aria-expanded="false" >About</NavLink>
                            </li>
                            <li>
                                <NavLink to="#pageSubmenu" data-toggle="collapse" aria-expanded="false" >Pages</NavLink>
                                <ul className="collapse list-unstyled" id="pageSubmenu">
                                    <li>
                                        <NavLink to="#">Page 1</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="#">Page 2</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="#">Page 3</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to="#">Portfolio</NavLink>
                            </li>
                            <li>
                                <NavLink to="#">Contact</NavLink>
                            </li>
                        </ul>

                    </nav>

                    <div id="content">

                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">

                                <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <i className="fas fa-align-justify"></i>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="nav navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <NavLink className="nav-link" to="/admin-table">Overview</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="#">Categories</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="view-quiz">View Quiz</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="#">Quizzes</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="create-quiz">Create quiz</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
        </>

    )
}

export default AdminNavbar;
