import { Flex, Select } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { MdArrowDropDown } from 'react-icons/md'

enum PaginationOption {
    TEN = 10,
    TWENTY_FIVE = 25,
    FIFTY = 50,
}

interface IProps {
    limit: PaginationOption,
    onChange: Function
}

const ITEMS_PER_PAGE_OPTIONS = [PaginationOption.TEN, PaginationOption.TWENTY_FIVE, PaginationOption.FIFTY];

const Filters = ({ limit, onChange }: IProps) => {
    const [selected, setSelected] = useState<PaginationOption>(PaginationOption.TWENTY_FIVE);
    const onSelected = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
        if (!target?.value) {
            return
        }

        setSelected(target.value as any);
        onChange(selected)
    }

    useEffect(() => {
        setSelected(limit)
    }, [])

    return (
        <Flex marginY={8} width="100%" justifyContent="flex-end" >
            <Select placeholder='Select option' maxW={48} icon={<MdArrowDropDown />} value={selected} onChange={onSelected}>
                {ITEMS_PER_PAGE_OPTIONS.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </Select>
        </Flex>
    )
}

export { Filters }