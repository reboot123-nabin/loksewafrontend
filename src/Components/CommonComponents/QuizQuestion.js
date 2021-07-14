import React from 'react';
import Button from 'react-bootstrap/Button';
import '../css/style.css';
import $ from 'jquery'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function QuizQuestion() {
 
    return (
        <>
        <div className="sidenavigation">
       <div class="sidenavigation1">
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3>Yess Quiz</h3>
            </div>

            <ul class="list-unstyled components">
                <p>Poject Overview</p>
                <li class="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" >Authentication</a>
            
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
                                <a class="nav-link" href="#">Overview</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Categories</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="displayquiz">Answers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Quizzes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="createquiz">Create quiz</a>
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

export default QuizQuestion
