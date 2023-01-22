import styled from "styled-components";

const HomeWrapper = styled.div`
.home{
    width: 100%;
    background-image: url(https://cdn1.tu-tu.ru/aviacore-static/images/pink_wing.2e86c.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    .container{
        .w-100{ 
                padding: 160px 0; 
        }
    }
}
.h100vh{ 
    height: 100vh;
} 
.playMarketImg{
    width: 130px;
}
.mini-sections{
    width: 100px;
    height: 100px;
    background-color: rgba(0,0,0,.3);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    transition: 0.5s;
    border-radius: 5px;
    cursor: pointer;
}
.mini-sections:hover{
background-color:rgba(0, 0, 0, 0.603) !important; 
}
.mini-sections{
    display: flex;
}
.h1_text{
    font-size: 18px;
    font-weight: bold;
    color: black;
}
.d-flex_1{
    width: 100%;
    height: 200px;
}
.p_text{
    font-size: 15px;
    color: black;
    font-family: Helvetica,arial,sans-serif;
}
.ul_list{
    margin-top: 40px; 
    margin-bottom: 100px;
}
.text_little{
    font: 600 13px/1.54 Direct,Helvetica,Arial,sans-serif;
}
.links{
    font: -apple-system,"Segoe UI",Helvetica,Arial,sans-serif;
    font-size: 13px;
}
.otzivi{
    margin-top: 200px;
}
h6{
    font-weight: bold;
    font-family: Helvetica,arial,sans-serif;
    padding-top: 15px;
    color: black;
}
.container_sudjete{
    padding: 0 32px;
    padding-top: 45px;
}
.links_1{
    color: #202124;
    font: 600 13px/1.54 Direct,Helvetica,Arial,sans-serif;
}
.links_1:hover{
    color: #E3969C;
}
.card_img{
    width: 125px;
    height: 220px;
    border-radius: 15px;
    margin-left: 15px;
}

@media screen and (max-width: 993px){
    .home{ 
    .container{
        .row{ 
                .col-md-12{
                    justify-content: center !important;
                    padding: 10px 0;
                    text-align: center;
                }
        }
    }
}
}
.otzivi .text2 {
    /* font-weight: 100; */
}
`
export default HomeWrapper;