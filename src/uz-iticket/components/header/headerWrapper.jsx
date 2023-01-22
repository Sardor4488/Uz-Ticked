import styled from "styled-components";

const HeaderWrapper = styled.div`
header{
    background-color: transparent ;
    /* position: fixed; */
    z-index:3;
    width: 100%;
    transition: 0.3s;
    transform-origin: top;
} 
.logo{
    width: 60px !important;
}
.select-language{ 
    font-size: 12px !important;
    background-color: transparent;
    width: 150px;
}
.register-link{
}
.links{
    font-size: 13px !important; 
} 
 .d-none-nav{
    transition: 0.5s;
    transform: translateX(200%);
 }
 .d-block-nav{
    transition: 0.5s;
    transform: translateX(0%);
    
 }

.md-nav{
    position: fixed;
    z-index: 2 !important;
    background-color: #fff;
    height: 100vh;
    width: 200px;
    top: 66px !important;
    right: 0 !important;
    
    ul{
        li{
            background-color: #f1f1f1;
            border-bottom: 1px solid rgb(188, 188, 188);
            padding: 10px;
        }
    }
}
.shadow-md-nav{
    position: fixed;
    z-index: 1 !important;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    z-index: 1000;
    background-color:   rgba(76, 76, 76, 0.565) !important;
    transition: 0.4s;  
}
 .bar-icon{
    display: none !important;
    cursor: pointer !important;
    margin: 0 5px;
    width: 20px;
 }
@media screen and (max-width: 648px){
.d-none-md{
    display: none !important;
}
.logo{
    width:50px ;
}
.logo-text{
    font-size: 13px;
}
.bar-icon{
    display: block !important;
    
}
.header{
    background-color: #fff;
}
} 
`
export default HeaderWrapper;   