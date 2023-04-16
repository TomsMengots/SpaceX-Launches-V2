import { Flex, Select, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { PaginationOption } from 'src/core/models/PaginationModel';

interface IProps {
  limit: PaginationOption;
  onChange: Function;
}

const ITEMS_PER_PAGE_OPTIONS = [PaginationOption.TEN, PaginationOption.TWENTY_FIVE, PaginationOption.FIFTY];

const Filters = ({ limit, onChange }: IProps) => {
  const [selected, setSelected] = useState<PaginationOption | string>(PaginationOption.TWENTY_FIVE);
  const onSelected = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    if (!target?.value) {
      return;
    }

    setSelected(target.value);
    onChange(target.value);
  };

  useEffect(() => {
    setSelected(limit);
  }, []);

  return (
    <Flex my={8} w='100%' justifyContent='flex-end' alignItems='center'>
      <Text fontSize='xs' fontWeight='600' mr={2}>
        Launches Per Page:
      </Text>
      <Select placeholder='Select option' maxW={20} icon={<MdArrowDropDown />} value={selected} onChange={onSelected}>
        {ITEMS_PER_PAGE_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </Flex>
  );
};

export { Filters };
