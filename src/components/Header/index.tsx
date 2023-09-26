import { 
    HeaderButton, 
    HeaderButtonsContainer, 
    HeaderContainer ,

} from "./styles";
import coffeeLogoImg from '../../assets/coffee-delivery-logo.svg'
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
    return(
        <HeaderContainer>
            <div className="container">
                <img src={coffeeLogoImg}/>
                <HeaderButtonsContainer>
                    <HeaderButton>
                        <MapPin size={20} weight="fill"/>
                          Porto Alegre, RS
                    </HeaderButton>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    )
}