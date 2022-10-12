import styled from "styled-components";

const FooterWrapper = styled.div`

    footer {
        background-color: #f0f4f8;
        padding-top: 17px;
        padding-bottom: 50px;
    }

    .link_one {
        color: rgba(0,0,0,.45);
        border-color: rgba(0,0,0,.15); 
        font-size: 13px;
    }

    .footer_link {
        margin-bottom: 4px !important;
    }

    .footer_link:hover {
        color: #FF4D39 !important;
        transition: 0.3s;
    }

    .link_footer:hover {
        color: #FF4D39 !important;
        transition: 0.3s !important;
    }

    .footer_card p {
        font-size: 13px;
        margin: 0;
        padding: 0;
        font-weight: 400;
        line-height: 18px;
    }

    .footer_img {
        width: 24px;
        height: 24px;
        margin: 0 3px !important;
    }

    .footer_img-2 {
        width: 135px;
        height: 40px;
        margin-top: 8px;
    }

    @media screen and (max-width: 821px) {
        li {
            margin: 0px 0 !important;
        }
    }

`
export default FooterWrapper;