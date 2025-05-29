import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const ZoomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40em;
  height: 40em;
  position: relative;
  overflow: hidden;
`

export const ZoomedImage = styled.img.attrs<{
  $isZoomed: boolean
  $transformOrigin: string
}>((props) => ({
  style: {
    transform: props.$isZoomed ? 'scale(2)' : 'scale(1)',
    transformOrigin: props.$transformOrigin,
  },
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.1s ease;
`

export const ThumbnailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  width: 40em;
`

export const Thumbnail = styled.img`
  width: 5em;
  height: 5em;
  border-radius: 0.25em;
  cursor: pointer;

  &:hover {
    box-shadow:
      0 0.0625em 0.125em 0 rgba(0, 0, 0, 0.3),
      0 0.125em 0.375em 0.125em rgba(0, 0, 0, 0.15);
    transition: 0.3s ease;
    transform: scale(1.05);
  }
`
