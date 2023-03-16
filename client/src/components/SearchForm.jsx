import {
    Box,
    Input,
    Button
} from "@chakra-ui/react";
import { useState } from "react";

function SearchForm() {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        console.log(`Search URL: ${url}`);
        setTimeout(() => {
            setLoading(false);
          }, 3000);
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