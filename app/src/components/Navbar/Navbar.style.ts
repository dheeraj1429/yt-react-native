import styled from 'styled-components/native';

export const NavbarContainer = styled.View`
   padding: ${(props) => props.theme.sizes.spacing.lg + 'px'};
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: ${(props) => props.theme.sizes.spacing.md + 'px'};
`;

export const ImageContainer = styled.View`
   width: ${(props) => props.theme.sizes.widthAndHeight.giga + 'px'};
   height: ${(props) => props.theme.sizes.widthAndHeight.giga + 'px'};
`;

export const Image = styled.Image`
   width: 100%;
   height: 100%;
`;
