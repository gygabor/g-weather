import styled from '@emotion/styled'
import { IconButton } from '@mui/material'

interface StyledIconButtonProps {
  size: 'small' | 'medium' | 'large' | 'xlarge'
}

const iconSize = {
  small: '1.5rem',
  medium: '2rem',
  large: '4rem',
}

export const StyledIconButton = styled(IconButton)<StyledIconButtonProps>(
  ({ size }) => ({
    padding: '4px',
    '& svg': {
      fontSize: iconSize[size],
    },
  }),
)
