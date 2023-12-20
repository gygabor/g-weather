import styled from '@emotion/styled'
import { IconButton } from '@mui/material'

interface StyledIconButtonProps {
  size: 'small' | 'medium' | 'large'
}

const iconSize = {
  small: '1rem',
  medium: '1.5rem',
  large: '4rem',
}

export const StyledIconButton = styled(IconButton)<StyledIconButtonProps>(
  ({ size }) => ({
    padding: '4px',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '& svg': {
      fontSize: iconSize[size],
    },
  }),
)
