import { FC, ReactElement } from 'react';
import Row from 'src/layout/components/Row';
import IconButton, { IconName } from 'src/shared/icon/IconButton';

interface ButtonIconType {
  name: IconName;
}

interface TransitInputProps {
  setMealType: (type: string) => void;
}

const buttonIconList: ButtonIconType[] = [
  {
    name: 'morning'
  },
  {
    name: 'lunch'
  },
  {
    name: 'dinner'
  },
  {
    name: 'snack'
  }
];

const TransitInput: FC<TransitInputProps> = (props): ReactElement => {
  const { setMealType } = props;

  const handleFilterChange = (type: string) => {
    setMealType(type);
  };

  return (
    <Row centerX width="100%" gap="10%">
      {buttonIconList.map((buttonIcon, index) => (
        <div>
          <IconButton size="xxlarge" key={index} name={buttonIcon.name} onClick={() => handleFilterChange(buttonIcon.name)} />
        </div>
      ))}
    </Row>
  );
};

export default TransitInput;
