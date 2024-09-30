import {ContainerMenu, LogoContainer, Option} from './styles';
import {menuItems} from '../../utils/menuItens';
import { useState } from 'react';
import Logo from '../../assets/logo.png';

export default function SideMenu() {
  const [selectedOption, setSelectedOption] = useState('Home');

  function handleOptionClick(label: string, path: string) {
    if (selectedOption === label) {
      return;
    }

    setSelectedOption(label);
    window.location.href = path;
  }

  return (
    <ContainerMenu>
        <LogoContainer> 
          <img src={Logo} alt="Logo" width={100} />
        </LogoContainer>
        {menuItems.map((item, index) => {
          return (
            <Option key={index}
              onClick={() => handleOptionClick(item.label, item.path)}
              style={{
                backgroundColor: selectedOption === item.label ? '#CECECE' : '',
                borderLeft: selectedOption === item.label ? '5px solid #FF872C' : '',
              }}
            >
              <item.icon size={30} style={{marginRight: 10}}/>
              {item.label}
            </Option>
          );
        })}
    </ContainerMenu>
  );
}