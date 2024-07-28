

import { Col, Row, Typography } from 'antd';
import { Slide } from 'react-awesome-reveal';
import { withTranslation } from 'react-i18next';
import ProfileUi from './ProfileUi';
import { ContactContainer } from '../ContactForm/styles';


const data = [
  {
    name : "Prakash",
    designation : "Software Developer",
    imgUrl : 'img/profile/prakash.jpeg'
  },
  {
    name : "Ravi Kumar",
    designation : "Software Developer",
    imgUrl : 'img/profile/ravi.jpeg'
  },
  {
    name : "Amit Kumar",
    designation : "Product Manager",
    imgUrl : 'img/profile/amit.jpg'
  },
  {
    name : "Neelanchal Maurya",
    designation : "Product Manager",
    imgUrl : 'img/profile/neelanchal.jpeg'
  },
]

const Profile = () =>{
  const arrayDriection = ['right','left','down','up']
    return(
      <ContactContainer >
        <Row justify="center" align="middle">
          {/* <Col lg={12} md={11} sm={24} xs={24}>
            <Slide {...{direction : 'left'}}>
              <h6>Technology</h6>
            </Slide>
          </Col>
          <Col lg={12} md={11} sm={24} xs={24}>
            <Slide {...{direction : 'right'}}>
              <h6>Product</h6>
            </Slide>
          </Col> */}
          {data.map((value, i) => {
            return (
               <Slide {...{direction : arrayDriection[(i+1)%4]}}>
                  <ProfileUi
                    {...value} 
                    />
                </Slide>
            )
          })}
        </Row>
      </ContactContainer>
    )
}

export default withTranslation()(Profile);