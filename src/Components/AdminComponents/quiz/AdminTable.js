import React from 'react';
import { NavLink } from 'react-bootstrap';
import AdminNavbar from '../AdminNavbar';


const AdminTable = () => {
  return (
    <>
      <AdminNavbar />
      <div className="amdin_table">

        <table id="customers">
          <tr>
            <th>TITLE</th>
            <th>DIFFICULTY</th>
            <th>CATEGORY</th>
            <th>START</th>
            <th>END</th>
            <th>CREATED BY</th>
            <th>CREATED AT</th>
            <th>Questions</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>belgium</td>
            <td>belgium</td>
            <td>belgium</td>
            <td>belgium</td>
            <td>belgium</td>
            <td>belgium</td>

          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>belgium</td>
            <td>belgium</td>
            <td>belgium</td>
            <td>belgium</td>
            <td>belgium</td>
            <td>belgium</td>
          </tr>

        </table><br />
        <nav aria-label="...">
          <ul class="pagination">
            <li class="page-item disabled">
              <span class="page-link form-control">Previous</span>
            </li>
            <li class="page-item"><NavLink class="page-link form-control" to="#">1</NavLink></li>
            <li class="page-item active">
              <span class="page-link form-control">2</span>
            </li>
            <li class="page-item"><NavLink class="page-link form-control" to="#">3</NavLink></li>
            <li class="page-item">
              <NavLink class="page-link form-control" to="#">Next</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default AdminTable
