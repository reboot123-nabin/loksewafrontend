import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { NavLink } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";



function AdminNavbar() {

    return (
        <>
            <div className="sidenavigation">
                <div class="sidenavigation1">
                    <nav className="admin-nav" id="sidebar">
                        <div class="sidebar-header">
                            <h3>Yess Quiz</h3>
                        </div>

                        <ul class="list-unstyled components ">
                            <p>Poject Overview</p>


                            <li class="active">
                                {/* <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </a> */}
                                <a class="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" >Yes Quiz</a>

                                <ul class="dropdownnavbar" aria-labelledby="dropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Add Quiz <FaAngleRight/> </a></li>
                                    <li><a class="dropdown-item" href="#">Schedule Quiz <FaAngleRight/></a></li>

                                </ul>
                            </li>
                            <li class="active">
                                {/* <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </a> */}
                                {/* <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" >Question</a>

                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Add Question </a></li>
                                    <li><a class="dropdown-item" href="#">View Question</a></li>
                                
                                </ul> */}
                                <a class="dropdown-toggle" href="add-question" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" >Question</a>

                                <ul class="dropdownnavbar" aria-labelledby="dropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Add Question <FaAngleRight/> </a></li>
                                    <li><a class="dropdown-item" href="#">View Question <FaAngleRight/></a></li>

                                </ul>
                            </li>
                            <li>
                                <NavLink to="add-question">Add Question</NavLink>
                            </li>
                           
                            <li>
                                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" >About</a>
                            </li>
                            <li>
                                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" >Pages</a>
                                <ul class="collapse list-unstyled" id="pageSubmenu">
                                    <li>
                                        <a href="#">Page 1</a>
                                    </li>
                                    <li>
                                        <a href="#">Page 2</a>
                                    </li>
                                    <li>
                                        <a href="#">Page 3</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Portfolio</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>

                    </nav>

                    <div id="content">

                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <div class="container-fluid">

                                <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <i class="fas fa-align-justify"></i>
                                </button>

                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="nav navbar-nav ml-auto">
                                        <li class="nav-item active">
                                            <NavLink class="nav-link" to="/admin-table">Overview</NavLink>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Categories</a>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink class="nav-link" to="view-quiz">View Quiz</NavLink>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Quizzes</a>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink class="nav-link" to="create-quiz">Create quiz</NavLink>
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
