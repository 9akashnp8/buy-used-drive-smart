import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

function BaseTable({metric, result}) {
    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>{metric}</TableCaption>
                <Thead>
                <Tr>
                    <Th>Data</Th>
                    <Th isNumeric>Count</Th>
                </Tr>
                </Thead>
                <Tbody>
                    {Object.entries(result).map(([subkey, subvalue]) => {
                        return (
                            <Tr>
                                <Td>{subkey}</Td>
                                <Td isNumeric>{subvalue}</Td>
                            </Tr>
                        )
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default BaseTable;