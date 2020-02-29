import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #7159c1;
    }
  }

  aside {
    display: flex;
    align-items: center;

    > button {
      width: 100%;
      height: 32px;
      background: #f64c75;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.2, '#f64c75')};
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
      white-space: nowrap;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #666;
      white-space: nowrap;
    }
  }

  img {
    flex: 0 0 32px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
