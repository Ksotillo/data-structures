import styled from 'styled-components'
import { space } from 'styled-system';

export const GlassCard = styled.div<{ whiteStyle?: boolean }>`
    padding: 1.5rem;
    ${space}
    background: ${({ whiteStyle }) =>
        whiteStyle ? "white" : "rgba( 255, 255, 255, 0.25 )"};
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    position: relative;
    min-height: 200px;

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: ${({ whiteStyle }) =>
            whiteStyle ? "#1a4551 !important" : "inherit"};
    }

    p {
        font-weight: 600;
    }
`;

export const GlassCardContent = styled.div`
    overflow: auto;
    max-height: 400px;
    padding: 1rem;


    h2 {
        text-align: center;
    }

    table {
        width: 100%;
        border-radius: 10px;
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    }

    th {
        color: rgba(255, 255, 255, 0.5);
        text-align: center;
        padding: 1rem;
    }

    tr {
        &:nth-child(2) {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            td {
                &:first-child {
                    border-top-left-radius: 10px;
                }
                &:last-child {
                    border-top-right-radius: 10px;
                }
            }
        }
        &:last-child {
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            td {
                &:first-child {
                    border-bottom-left-radius: 10px;
                }
                &:last-child {
                    border-bottom-right-radius: 10px;
                }
            }
        }
        &:not(:first-child) {
            td {
                background: rgba(255, 255, 255, 0.25);
                backdrop-filter: blur(4px);
                -webkit-backdrop-filter: blur(4px);
                padding: 1rem;
                white-space: break-spaces;
            }
        }
    }

    ul {
        list-style: "👉  ";

        li {
            margin: 0 0 10px 0;
        }
    }
`;