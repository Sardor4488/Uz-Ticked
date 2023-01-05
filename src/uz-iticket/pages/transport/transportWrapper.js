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
    max-width: 130px !important;
    background-color: #f2f2f2;
    border-radius: 7px;
    padding: 10px;
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
    height: 200px;
}

.search_card {
    border: 1px solid #d8d8d8;
    border-radius: 12px;
    background: #f0f4f8;
    padding: 18px 16px 20px;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
}

.search_card-icon {
    margin-left: 7px !important;
    color: gray;
    margin-right: 7px !important;
    margin: 0;
}

.search_card-input {
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
`
export default TransportWrapper;