import { ButtonProps } from '@mui/material'
import { FC } from 'react'
import Icons from './Icons'
import { StyledIconButton } from './styles'

type IconType = keyof typeof Icons

interface Props extends ButtonProps {
  iconType: IconType
  size?: 'small' | 'medium' | 'large'
}

const CustomIconButton: FC<Props> = ({
  iconType,
  onClick,
  size = 'medium',
  ...rest
}) => {
  return (
    <>
      <StyledIconButton onClick={onClick} size={size} {...rest}>
        {Icons[iconType]}
      </StyledIconButton>
    </>
  )
}

export default CustomIconButton
