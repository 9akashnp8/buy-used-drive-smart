import {
    Box,
    Input,
    Button
} from "@chakra-ui/react";
import { useState } from "react";

function SearchForm({setData}) {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await fetch(import.meta.env.VITE_API_BASE_URL + 'analyzer', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({url: url})
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json();
            setData(data);
            // console.log(data)
        } catch(error) {
            console.log(error);
        }
        setLoading(false);
    }

    function handleUrlChange(event) {
        console.log(`Updating url state to: ${event.target.value}`);
        setUrl(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box
                display={"grid"}
                placeItems={"center"}
            >
                <Input
                    placeholder='Enter search url' 
                    colorScheme='blue'
                    value={url}
                    onChange={handleUrlChange}
                />
                <Button
                    colorScheme='blue'
                    size='lg'
                    isLoading={loading}
                    loadingText='Loading'
                    type="submit"
                    mt={3}
                    mx="auto"
                >
                    Button
                </Button>
            </Box>
        </form>
    )
}

export default SearchForm;