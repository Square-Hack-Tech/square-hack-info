import { Row } from 'antd'
import { Slide } from 'react-awesome-reveal'
import { withTranslation } from 'react-i18next'
import ProfileUi from './ProfileUi'
import { ContactContainer } from '../ContactForm/styles'

const data = [
  {
    name: 'Shankar Kumar',
    designation: 'Chief Technology Officer',
    degree: 'B-Tech [CUSAT]',
    imgUrl: 'img/page/sh-first.jpg',
    experience: '5-Years'
  },
  {
    name: 'Prakash',
    designation: 'Software Developer',
    degree: 'B-Tech [CUSAT]',
    imgUrl: 'img/profile/prakash.jpeg',
    experience: '3-Years'
  },
  {
    name: 'Ravi Kumar',
    designation: 'Software Developer',
    degree: 'B-Tech [CUSAT]',
    imgUrl: 'img/profile/ravi.jpeg',
    experience: '4-Years'
  },
  {
    name: 'Avinash Kumar Singh',
    designation: 'Research Scholar / Product Manager',
    degree: 'M-Tech [IIT Dhanbad]',
    imgUrl: 'img/profile/avinash.jpeg'
  },
  {
    name: 'Neelanchal Maurya',
    designation: 'Product Manager',
    degree: 'B-Tech[IIT Bombay]',
    imgUrl: 'img/profile/neelanchal.jpeg'
  }
]

const Profile = () => {
  const arrayDriection = ['right', 'left', 'down', 'up']
  return (
    <ContactContainer>
      <Row justify='center' align='middle'>
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
            <Slide key={i} {...{ direction: arrayDriection[(i + 1) % 4] }}>
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

export default withTranslation()(Profile)
