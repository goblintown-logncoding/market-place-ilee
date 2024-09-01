import { Box, Button, Stack } from '@mui/material';
import useCounterStore from '../stores/useCounterStore';

const Component = () => {
  const { counter, increment } = useCounterStore();
  return (
    <Box>
      <Stack>
        {counter}
        <Button onClick={() => increment()}></Button>
      </Stack>
    </Box>
  );
};

export default Component;
