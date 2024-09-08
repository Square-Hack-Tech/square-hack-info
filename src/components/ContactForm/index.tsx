import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";
import { Slide, Zoom } from "react-awesome-reveal";
import { Backdrop, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit, isLoading } = useForm(
    validate
  ) as any;
  const [displayedText, setDisplayedText] = useState('Please Wait ..');
  const fullText = '.....';  // The complete text to display

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom {...{direction : 'left'}}>
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  useEffect(() => {
    if(isLoading){
      let index = 0;

    // Create an interval to progressively display letters
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index += 1;

      // Reset the text after the full text has been displayed
      if (index === fullText.length) {
        setDisplayedText('Please Wait ..');  // Clear the text
        index = 0;  // Reset the index
      }
    }, 200);  // Adjust speed (in milliseconds) of adding letters
    // Clean up interval on component unmount
    return () => clearInterval(interval);
    }
  }, [isLoading]);

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide {...{direction : 'left'}}>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide {...{direction : 'right'}}>
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  value={values?.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Your Message"
                  value={values.message || ""}
                  name="message"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <ButtonContainer>
                <Button name="submit">{t("Submit")}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
      <Backdrop
        sx={(theme) => ({ color: 'rgb(255, 130, 92)', zIndex: theme.zIndex.drawer + 1 })}
        open={isLoading}
      >
        <div style={{textAlign: 'center'}}>
        <CircularProgress color="inherit" />
        <p style={{fontWeight: 'bolder', color: 'rgb(255, 130, 92)'}}>{displayedText}</p>
        </div>
    </Backdrop>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
