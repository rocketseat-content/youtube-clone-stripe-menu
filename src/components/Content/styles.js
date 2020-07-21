import styled, { css } from 'styled-components';

const h3 = css`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: #32325d;
`;

const p = css`
  color: #6b7c93;
`;

const hover = css`
  cursor: pointer;
  transition: opacity 0.1s ease-in;
  &:hover {
    opacity: 0.7;
  }
`;

export const ProductsWrapper = styled.div`
  padding: 32px 35px;
  white-space: nowrap;

  .primary {
    li {
      display: flex;
      align-items: center;

      div {
        ${hover}
        margin-left: 19px;

        h3 {
          ${h3}
        }
        p {
          ${p}
          margin-top: 10px;
        }
      }

      & + li {
        margin-top: 32px;
      }

      span {
        display: inline-block;
        width: 48px;
        height: 48px;
        border-radius: 50%;

        &.payments {
          background: #80b9f9;
        }
        &.billing {
          background: #64e5a7;
        }
        &.connect {
          background: #55d3f5;
        }
      }
    }
  }

  .secondary {
    margin-top: 60px;

    li {
      ${hover}
      display: flex;

      & + li {
        margin-top: 28px;
      }

      h3 {
        ${h3}
        margin-left: 16px;
      }
      p {
        ${p}
        margin-left: 14px;
      }

      span {
        display: inline-block;
        width: 22px;
        height: 22px;
        border-radius: 50%;

        &.sigma {
          background: #beaef0;
        }
        &.atlas {
          background: #ffd876;
        }
        &.radar {
          background: #fba2e8;
        }
        &.issuing {
          background: #80b9f9;
        }
        &.terminal {
          background: #5355ba;
        }
      }
    }
  }
`;

export const DevelopersWrapper = styled.div`
  padding: 32px 35px;
  white-space: nowrap;

  .primary {
    display: flex;

    > span {
      display: inline-block;
      width: 17px;
      height: 17px;
      margin-right: 12px;
      background: #505e7d;
      border-radius: 3.5px;
    }

    > div {
      > h3 {
        ${h3}
        ${hover}
      }
      > p {
        ${p}
        margin-top: 16.7px;
      }

      > div {
        margin-top: 35px;
        display: flex;
        align-items: center;

        > ul + ul {
          margin-left: 41px;
        }
        > ul li {
          ${hover}
          color: #424770;

          h4 {
            color: #8898aa;
            text-transform: uppercase;
          }

          & + li {
            margin-top: 13px;
          }
        }
      }
    }
  }
  .secondary {
    margin-top: 69px;

    li {
      ${hover}
      ${h3}
      
      display: flex;
      align-items: center;

      & + li {
        margin-top: 21px;
      }
    }

    span {
      display: inline-block;
      width: 17px;
      height: 17px;
      margin-right: 12px;
      border-radius: 3.5px;
      background: #505e7d;

      &.api-reference {
        border-radius: 0;
        background: repeating-linear-gradient(
          rgba(0, 0, 0, 0),
          #000 0.001px,
          #000 2.125px,
          #fff 2.126px,
          #fff 4.25px
        );
      }
    }
  }
`;

export const CompanyWrapper = styled.div`
  padding: 32px 35px;
  white-space: nowrap;

  .primary {
    > li {
      ${h3}
      ${hover}
      display: flex;
      align-items: center;

      & + li {
        margin-top: 22px;
      }

      > span {
        display: inline-block;
        width: 17px;
        height: 17px;
        border-radius: 3.5px;
        background: #505e7d;
        margin-right: 13px;
      }
    }
  }
  .secondary {
    margin-top: 64.5px;

    li {
      display: flex;
      align-items: center;

      &:not(.title) {
        ${hover}

        margin-top: 21px;
        margin-left: 30px;

        color: #424770;

        .new-tag {
          text-transform: uppercase;
          font-size: 10px;
          background: #646ddf;
          border-radius: 6px;
          padding: 2px 4.5px;
          color: #fff;
          margin-left: 6px;
        }
        .arrow {
          margin-left: 6px;
          font-weight: bold;
          transform: scaleX(0.7) scaleY(1.1);
        }
      }

      &:nth-child(2) {
        margin-top: 30.2px;
        font-weight: 500;
      }
    }

    li.title {
      ${h3}

      .title-icon {
        display: inline-block;
        width: 17px;
        height: 17px;
        border-radius: 3.5px;
        margin-right: 13px;
        background: #505e7d;
      }
    }
  }
`;
