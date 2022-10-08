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
`
export default HomeWrapper;