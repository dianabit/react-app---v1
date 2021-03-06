import React from 'react';
import styled from 'styled-components';
import FormInput from './FormInput';
import Button from '../Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border: 1px solid grey;
  padding: 30px;
  margin: 20px 0;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
`;

const FormButton = styled(Button)`
  margin-top: 20px;
`;

class Form extends React.Component {
  render() {
    return (
      <Wrapper>
        <i class="fa fa-times" />
        <FormWrapper>
          <FormInput
            name="username"
            placeholder="Username"
            icon="user"
          />
          <FormInput
            name="password"
            placeholder="Password"
            icon="unlock"
          />
          <FormButton>
            <Button type="submit" text="SUBMIT" onClick={this.onClick} />
          </FormButton>
        </FormWrapper>
      </Wrapper>
    );
  }
}

export default Form;
