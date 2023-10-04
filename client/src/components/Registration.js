import React from 'react';
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRadio
}

from 'mdb-react-ui-kit';
import Typography from '@mui/material/Typography'
function Registration() {

  const [submitted, setSubmitted] = React.useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios.post('http://localhost:9099/insert',{
      fn: data.get('firstName'),
      ln: data.get('lastName'),
      email: data.get('email'),
      DOB: data.get('date'),
      mobile: data.get('Mobile'),
      Gender: data.get('inlineRadio')
    }).then((response) => {
      console.log(response.data);
      setSubmitted(true);
    });
  };

  if (submitted) {
    return (
      <Typography variant="h6" align="center" className="text-Black-50 fw-bold">
        Successfully registered!
        <br></br>
        <button>
        <div>
        <p className="mb-0"><a href="/login" className="text-Black-50 fw-bold">Sign in</a></p>
        </div>
        </button>
      </Typography>
    );
  }

  
  return (
    <MDBContainer fluid >

      <MDBRow className='justify-content-center align-items-center m-5'>

        <MDBCard>
          <MDBCardBody className='px-4'>

            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
            <form onSubmit={handleSubmit}>
            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' name='firstName' label='First Name' size='lg' id='firstName' type='text'/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' name='lastName' label='Last Name' size='lg' id='lastName' type='text'/>
              </MDBCol>

            </MDBRow>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' name='date' label='Birthday' size='lg' id='date' type='text'/>
              </MDBCol>

              <MDBCol md='6' className='mb-4'>
                <h6 className="fw-bold" id='inlineRadio'>Gender: </h6>
                <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline />
                <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline />
                <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline />
              </MDBCol>

            </MDBRow>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' name='email' label='Email' size='lg' id='email' type='email'/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' name='Mobile' label='Phone Number' size='lg' id='Mobile' type='rel'/>
              </MDBCol>

            </MDBRow>

           
            <MDBBtn className='mb-4' size='lg'>Submit</MDBBtn>
            </form>
          </MDBCardBody>
        </MDBCard>

      </MDBRow>
    </MDBContainer>
  );
}

export default Registration;