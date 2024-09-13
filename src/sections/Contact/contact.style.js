import styled from 'styled-components';

const ContactWrapper = styled.div`
    
    padding: 50px 0 50px 0;
    overflow: hidden;
    align-items: center;
    form{
        text-align: center;
        text-align: center;
        /*background: #fbfbfb;*/
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
    }
    input{
        display: block;
        padding: 15px;
        width: 80%;
        height: 60px;
        font-size: 16px;
        border-radius: 5px;
        margin: 0 auto 0px auto;
        box-shadow: none;
        transition: 450ms all;
        border: 1px solid ;
        &:hover,&:focus{
            border-color: rgba(251,123,129, 1);
        }
    }
    button{
        transition: 450ms all;
        background: #F9A826;
        color: black;
        font-size: 16px;
        height: 58px;
        &:hover{
            background: blue;
            color: #fff;
        }
    }
    .section-title{
        h2{
            margin-bottom: 55px;
        }
    }
    @media only screen and (max-width: 912px) {
        padding: 0px 0 80px 0;
        form{
            padding: 50px;
            input{
                width: 70%;
            }
        }

    }
    @media only screen and (max-width: 568px) {
        form{
            padding: 30px;
            display: block;
            input{
                width: 100%;
                margin-bottom: 30px;
            }
        }
    }
    @media only screen and (max-width: 480px) {
        form{
            padding: 30px 15px;
            input{
                width: 100%;
            }
        }
    }
    
`

export default ContactWrapper;