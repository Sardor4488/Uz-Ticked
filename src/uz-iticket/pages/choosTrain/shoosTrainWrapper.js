import styled from "styled-components";
import backgraundImg from './../../images/choos-back.jpg'
const ChoosTrainWrapper=styled.div`
.choos-train{
    padding-top: 30px;
    padding-bottom:30px ;
    background-image: url(${backgraundImg}) ;
}
.train{
background-color: #4e95fe;
border-radius: 5px;
color: #fff !important;
padding: 5px;
font-size: 16px;
}
.leave{
    color: #3b3b3b !important;
}
.place{
}
.leave-time{
    font-weight: bold;
    font-size: 18px;
}
.from-leave-to{
    background-color: #f2f2f2;
}
.leave-from{
    font-size: 20px;
    font-weight: bold;
}
`
export default ChoosTrainWrapper;