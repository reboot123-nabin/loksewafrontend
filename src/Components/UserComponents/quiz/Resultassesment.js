import React from 'react'


const Resultassesment = () => {
  return (
    <>
     <div class="card card-result">
     <div className="content card-content">
          <h3>Your results</h3>
          3 of 9<br></br>
          56%<br></br>
          your time:50%;<br></br>
          <input type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" value="Launch Modal"/>
          <button className="btn btn-success" >Try again</button>
        </div>
</div>



<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Your Answers</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Hello, below is some text in a div that should start scrolling if the height of the modal exceeds the browser.
        <p><div id="scrollbox">
          <br/>
        <div class="form-floating mb-3">
  <label type="email" class="form-control btn btn-primary" id="floatingInput" placeholder="name@example.com"/>
  
</div>
<br/>
<div class="form-floating mb-3">
  <label type="email" class="form-control btn btn-danger" id="floatingInput" placeholder="name@example.com"/>
  
</div>
<br/>s
</div>
</p>
        </div>
        
      </div>
    </div>
  </div>

   
    </>
  )
}

export default Resultassesment
