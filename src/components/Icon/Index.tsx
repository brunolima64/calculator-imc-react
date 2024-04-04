import { ItemType } from "../../types/ItemType"
import * as C from './styles';

type Props = {
    data: ItemType;
    
}
export const Icon = ({data}: Props) => {
    return (
        <C.Container style={{backgroundColor: data.color}}>
            <C.ImageArea>
                <C.Image src={data.image} alt=""/>
            </C.ImageArea>
            
            <C.Name>{data.name}</C.Name>
            <C.TextImc>Seu IMC está entre {data.imcStart} e {data.imcEnd}</C.TextImc>
        </C.Container>
    )
}