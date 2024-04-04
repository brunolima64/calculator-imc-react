import { useEffect, useState } from 'react';
import * as C from './styles';
import { ListItems } from './data/ListItems';
import { ItemType } from './types/ItemType';
import { Icon } from './components/Icon/Index';
import './App.css';

export const App = () => {
	const [heightField, setHeightField] = useState('');
	const [weightField, setWeightField] = useState('');
	const [imcResultCalc, setImcResultCalc] = useState(0);

	const [icon, setIcon] = useState<ItemType | null>(null);

	useEffect(()=>{
		if (imcResultCalc !== 0) {
			for (let i = 0; i < ListItems.length; i++) {
				if (imcResultCalc >= ListItems[i].imcStart && imcResultCalc <= ListItems[i].imcEnd) {
						setIcon(ListItems[i]);
				}
			}
		  }
	}, [imcResultCalc, ListItems]);

	const calcImc = () => {
		let h = parseInt(heightField.replace('.', ''));
		let w = parseInt(weightField);
		h = h / 100;
		let res = (w / (h * h));

		if(heightField && weightField) {
			setImcResultCalc(res);
		} else {
			alert('preencha os campos');
		}
	}

	const handlePrevClick = () => {
		setIcon(null);
		setImcResultCalc(0);
		setHeightField('');
		setWeightField('');
	}

	return (
		<C.PageContainer>
			<C.Container>
				<C.LeftArea>
					<C.Title>Calcule seu IMC.</C.Title>
						<C.P>
							IMC e a sigla para Índice de Massa Corpórea. parâmetro
							adotado pela Organização mundial de Saúde para
							calcular o peso ideal de cada pessoa.
						</C.P>
					<C.InputArea>
						<C.Input 
							type="text" 
							placeholder='Digite a sua altura. Ex: (1.54) em metros'
							value={heightField}
							onChange={e=>setHeightField(e.target.value)}
						/>
						<C.Input 
							type="text" 
							placeholder='Digite o seu peso. Ex: 75.3 (em kg)'
							value={weightField}
							onChange={e=>setWeightField(e.target.value)}
						/>
					</C.InputArea>
					<C.ButtonArea>
						<C.Button onClick={calcImc}>Calcular</C.Button>
					</C.ButtonArea>
				</C.LeftArea>

				<C.RightArea>
						{!icon &&
							ListItems.map((i, k)=> (
								<Icon key={k} data={i}/>
							))
						}
						
						{icon &&
								<>
									<C.ResIcon style={{backgroundColor: icon.color}}>
										<C.Prev onClick={handlePrevClick}>
											<C.Image src='/leftarrow.png' alt=""/>
										</C.Prev>
										<C.ImageArea>
											<C.Image src={icon.image} alt=""/>
										</C.ImageArea>
										<C.Name>{icon.name}</C.Name>
										<C.ResImc>Seu IMC é de {imcResultCalc.toFixed(2)} kg/m²</C.ResImc>
										<C.TextImc>Seu IMC está entre {icon.imcStart} e {icon.imcEnd}</C.TextImc>
									</C.ResIcon>
								</>
						}
				</C.RightArea>
			</C.Container>
		</C.PageContainer>
	)
}
export default App;