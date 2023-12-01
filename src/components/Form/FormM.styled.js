import styled from 'styled-components';

export const FormM = styled.form`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0px;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${p => p.theme.colors.bg_dark};
      height: 48px;
      width: 80px;
      border-radius: 5px;
      margin: 0 6px;
      color: ${p => p.theme.colors.text};
      border: ${p => p.theme.borders.none};

      &:hover {
        color: ${p => p.theme.colors.primary};
      }
    }
  }

  & input {
    display: block;
    text-align: center;
    font-size: ${p => p.theme.fontSizes.m};

    height: 48px;
    width: 300px;

    border-radius: 5px;
    border: ${p => p.theme.borders.none};

    ::placeholder {
      font-size: ${p => p.theme.fontSizes.m};
    }
  }
`;