import styled from "styled-components";

const TransportWrapper = styled.div`
.transport-section{
    padding-top: 100px;
    padding-bottom:30px ;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(https://cdn1.tu-tu.ru/images2/bemp/page/main/etrains_3.jpg);
    
} 
.date-transports{
    max-width: 100px !important;
    text-align: center;
    background-color: #0D6EFD;
    color: white;
    border-radius: 7px;
    padding: 8px;
}
.css-1h9z7r5-MuiButtonBase-root-MuiTab-root{
    padding: 0 0 0 5px;
    font-size: 16px; 
    min-width: 70px !important;
} 
.cont-transports-search{
    border-radius: 8px;
    background-color: #fff;
    width: 100%;
 }
.countrys{
    width: 100% !important;
    text-align: center;
}
.search_card {
    border: 1px solid #d8d8d8;
    border-radius: 12px;
    background: #f0f4f8;
    padding: 18px 16px 20px;
    margin-bottom: 40px;
}
.countrys span {
    margin: 0 5px;
    cursor: pointer;
    font-weight: 500;
}
.abab{
    display: grid;
    grid-gap: 10px;
}
.transport-away-time{
line-height:17px;
margin-bottom: 7px;
}
.search-card-icon {
    color: gray;
   
    margin: 0;
}

.search-card-input {
    margin-right: 10px;
}
.pasajir{
    display: flex;
    align-items: center;
}
.pasajir_input{
    border-radius: 0 !important;
}
.minus{
    padding: 13px 0;
    font-size: 14px;
    color: #000;
    cursor: pointer;
    width: 40px;
    height: 100%;
    border-radius: 5px;
    border: 1px solid #d8d8d8;
    background: #fff;  
    display: flex;
    justify-content: center;
    font-weight: bold;
    border-right: 0 !important;
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
}
.plus{
    padding: 13px 0;
    font-size: 14px;
    color: #000;
    cursor: pointer;
    width: 40px;
    height: 100%;
    border-radius: 5px;
    border: 1px solid #d8d8d8;
    background: #fff;  
    display: flex;
    justify-content: center;
    font-weight: bold;
    border-right: 0 !important;
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
}
.count-ticket{
    padding: 10px 0;
    font-size: 14px;
    color: #000;
    cursor: pointer;
    width: 40px;
    height: 100%;
    border-radius: 0px;
    border-left: 1px solid #d8d8d8;
    border-top: 1px solid #d8d8d8;
    border-bottom: 1px solid #d8d8d8;
    background: #fff;  
    display: flex;
    justify-content: center;
    font-weight: bold;
}


.search_card input {
    border: 1px solid #d8d8d8;
    border-radius: 5px;
    padding: 10px;
    background: #fff;
    font-size: 15px;
    line-height: 20px;
    outline: none;
}
.input-count-ticket{
    width: 40px;
}
.title-transport{
    font-size: 17px !important;
    font-weight: bold;
}
tbody td .place,  .from-to, .name-transpor span , .place-direction   {
    font-size: 13px;
    color: #5b5b5b !important;
}
.direction-phone{
    width: 300px !important;
}
.btn-primary {
    background-color: #0D6EFD !important;
}
thead tr td{
    font-weight: 600;
}
.p-fixed{
    position: fixed;
    top: 0px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 9px 8px -7px rgba(0,0,0,0.75);

}
.w-85{
    width: 85%;
}
.name-transport{
    min-width: 222.6px !important;
}
.train{
background-color: #4e95fe;
border-radius: 5px;
color: #fff !important;
padding: 5px;
font-size: 16px;
}
.title-transport span{
    font-size: 17px !important;
    font-weight: normal;
}
.from{
    margin-left: 200px !important;
}
.TabPanel{
    padding: 10px !important;

}
.TabPanel ul{
    height: 40px !important; 
}
.card{
    background-color: #f2f2f2;
    border-radius: 5px;

}
.information-reys  {
    font-size: 16px !important;
}
.guliston-br{
        display: block !important;
    }
    .hidden-back-input .btn{
        min-width: 168px !important;
        margin-left: 5px;
    }
    .btn-back{
        background-color: #d2d2d2;
    }
@media screen and (min-width: 1200px){
    .guliston-br{
        display: none !important;
    }
}
@media screen and (min-width: 992px){
.direction-pc{
    display: block !important;
}
.direction-phone{
    display: none !important;
}
}
@media screen and (max-width: 992px){
.direction-pc{
    display: none !important;
}
.countrys{
        display: none !important;
    }
}
@media screen and (max-width: 768px){
.hidden-back-input{
    margin: 15px 0;
}
.search-card-icon{
    rotate: 90deg;
    margin: 7px 0;
}
.choos-back-date{
    width: 100% !important;
}
}
`
export default TransportWrapper;