import styled from 'styled-components';
import bathroom2 from '../assets/images/bathroom2.jpg';
import Title from 'Components/Title';
import {AiFillFacebook} from 'react-icons/ai';




const Contact = () => {
    return ( 
        <Wrapper>
        <Layer>

        <Title>Skontaktuj się z nami</Title>

            <Body>
            <div className="form"> 
                <form>
                    <input type="text" placeholder="Twoje imię" name="name" required></input>
                    <input type="tel" placeholder="Twój Telefon" name='phone' required></input>
                    <input type="email" placeholder='Twój email' name='email' required></input>
                    <textarea placeholder='Twoja wiadomość' name='message' required></textarea>
                    <button>Wyślij</button>
                </form>
            
            </div>

                <div className="info">


                <ul>
                    <li>Sylwester Świderski</li>
                    <li>f.r.b.creative@wp.pl</li>
                    <li>+48 602-152-570</li>
                    <li>Lewniowa 287</li>
                </ul>
                <a href="#home" className='fb-icon'><AiFillFacebook fill={"#4267B2"} size={50}></AiFillFacebook></a>

                
                 </div>
            </Body>

            </Layer>
        </Wrapper>

      );
}


const Layer = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    background:rgba(0,0,0,0.5);
`
const Wrapper = styled.div`
    background:purple;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position:relative;
    background:url(${bathroom2});
    background-color: #cccccc; 
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover; 

    
    @media (min-width: 768px) {
        background-attachment: fixed;
    }

`;

const Body = styled.div`
    
    top:5%;
    position:relative;
    height:80%;
    align-items:center;
    justify-content:center;
    margin:0 10% 0 10%;
    width:70%;

    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
        "form form"
        "info info";

    @media (min-width: 768px) {
        top:10%;
        grid-template-columns:1fr 1fr 0.7fr 1.3fr ;
        grid-template-rows: repeat(3, 1fr);
        grid-template-areas:
            "form form . info"
            "form form . info";

    }

    & .form {
        grid-area: form;

        & form{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;

            & > * {
                margin:10px 0;
                border-radius: 5px;
                width:100%;
                color:black;
                &:focus{
                    outline-color: var(--primary-color);
                    outline-style: solid;
                    outline-width:2px;
                }

            }

            & input{
                height:30px;

             }
            & textarea{
                height:100px;
                resize: none;
            }

            & button{
                cursor: pointer;
                height:40px;
                width:35%;
                align-self: center;
                background:var(--primary-color);
                color:white;
                border:none;

                &:hover{
                    background:var(--primary-color-dark);
                }
            }
    }
}
& .info {
        grid-area: info;
        display: flex;
        justify-content: center;

        & > ul{
            list-style:none;           
        }
        & .fb-icon{
                cursor:pointer;
                width:fit-content;
                transition: all 0.3s ease-in-out;
                &:hover{
                    transform:scale(1.3);
                    & svg{
                    fill:#6A89C8;
                }
                }
                
            }
        @media(min-width: 768px){
            flex-direction: column;
            font-size: 1.25vw;

        }
    }

    
`;



export default Contact;