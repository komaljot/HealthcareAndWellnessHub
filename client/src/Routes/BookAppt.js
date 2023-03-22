import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Components/Header';

export default function BookAppt() {
  return (
    <>
      <Header />
      <div className='p-5'>
        <h1 className='p-5 text-center'>Book Your Appointment</h1>
        <form className='ms-5'>
          <h3>Fill Patient Details : </h3>
          <fieldset>
          <div className="form-group row m-2">
            <label for="name" className="col-sm-2 col-form-label">Name <span className='text-danger'>*</span></label>
            <div className="col-sm-6">
              <input type="text" className="form-control" id="name" placeholder="Enter Your Name" />
            </div>
          </div>
          <div className="form-group row m-2">
            <label for="age" className="col-sm-2 col-form-label">Age <span className='text-danger'>*</span></label>
            <div className="col-sm-6">
              <input type="number" className="form-control" id="age" placeholder="Enter Your Age" />
            </div>
          </div>
          <div className="form-group row m-2">
            <label className="col-sm-2 col-form-label">Gender <span className='text-danger'>*</span></label>
            <div className="col-sm-6">
            <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" id="male" value="male" checked />
                <label className="form-check-label" for="male">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" id="female" value="female"  />
                <label className="form-check-label" for="female">
                  Female
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" id="notsaid" value="notsaid"  />
                <label className="form-check-label" for="notsaid">
                  Prefer Not to say
                </label>
              </div>
            </div>
          </div>
          <div className="form-group row m-2">
            <label for="address" className="col-sm-2 col-form-label">Address <span className='text-danger'>*</span></label>
            <div className="col-sm-6">
              <input type="text" className="form-control" id="address" placeholder="Address" />
            </div>
          </div>
          <div className="form-group row m-2">
            <label for="email" className="col-sm-2 col-form-label">Email <span className='text-danger'>*</span></label>
            <div className="col-sm-6">
              <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
          </div>
          <div className="form-group row m-2">
            <label for="phone" className="col-sm-2 col-form-label">Contact number <span className='text-danger'>*</span></label>
            <div className="col-sm-6">
              <input type="tel" className="form-control" id="email" placeholder="Contact Number" />
            </div>
          </div>
          <div className="form-group row m-2 p-5">
              <label><h3 className='text-center'>Schedule Available for this week Appointment</h3></label>
              <table className='p-5'>
                <tr className='p-5'>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                </tr>
                <tr className='p-5'>
                  <td>Morning : </td>
                  <td>Morning : </td>
                  <td>Morning : </td>
                  <td>Morning : </td>
                  <td>Morning : </td>
                  <td>Morning : </td>
                </tr>
                <tr className='p-5'>
                  <td>
                    <select>
                      <option>11:00am</option>
                      <option>12:00pm</option>
                    </select>
                  </td>
                  <td>
                    <select>
                      <option>11:00am</option>
                      <option>12:00pm</option>
                    </select>
                  </td>
                  <td>
                    <select>
                      <option>11:00am</option>
                      <option>12:00pm</option>
                    </select>
                  </td>
                  <td>
                    <select>
                      <option>11:00am</option>
                      <option>12:00pm</option>
                    </select>
                  </td>
                  <td>
                    <select>
                      <option>11:00am</option>
                      <option>12:00pm</option>
                    </select>
                  </td>
                  <td>
                    <select>
                      <option>11:00am</option>
                      <option>12:00pm</option>
                    </select>
                  </td>
                </tr>
                <tr className='p-5'>
                  <td>Evening : </td>
                </tr>
                <tr className='p-5'>
                  <td>
                    <select>
                      <option>5:00pm</option>
                      <option>6:00pm</option>
                      <option>7:00pm</option>
                    </select>
                  </td>
                  <td>
                    <select>
                      <option>5:00pm</option>
                      <option>6:00pm</option>
                      <option>7:00pm</option>
                    </select>
                  </td>
                  <td>
                    <select>
                      <option>5:00pm</option>
                      <option>6:00pm</option>
                      <option>7:00pm</option>
                    </select>
                  </td>
                  <td>
                    <select>
                      <option>5:00pm</option>
                      <option>6:00pm</option>
                      <option>7:00pm</option>
                    </select>
                  </td>
                  <td>
                    <select>
                      <option>5:00pm</option>
                      <option>6:00pm</option>
                      <option>7:00pm</option>
                    </select>
                  </td>
                  <td>
                    <select>
                      <option>5:00pm</option>
                      <option>6:00pm</option>
                      <option>7:00pm</option>
                    </select>
                  </td>
                </tr>
              </table>
          </div>
          </fieldset>
      <div className="form-group row m-2">
        <div className="col-sm-10">
          <button type="submit" className="btn btn-primary">Book Now</button>
        </div>
      </div>
        </form>
      </div>
    </>
  )
}
