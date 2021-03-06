import React, { useEffect, useRef } from 'react'
import tw, { styled } from 'twin.macro'
import { motion } from 'framer-motion'
import { useRecoilState, useSetRecoilState } from 'recoil'

import { fetchMovieDetails } from '../../api/utils'

import { useSetBackdropImage } from './useSetBackdropImage'

import { Countdown } from './Countdown'
import { MovieDetailsCard } from './MovieDetailsCard'
import { ReactComponent as FakeContentImage } from '../../assets/images/fake-tile-bg.svg'
import { useQuery } from 'react-query'
import { movieFocusOn, movieStatus } from './sharedState'

const tileBaseStyle = `
  flex flex-col sm:flex-row
  w-full xl:w-1/2-8 xxxl:w-1/3-12 xxxxl:w-1/4-16 h-56
  my-2 xl:mx-2
  rounded-4xl overflow-hidden bg-gray-400 bg-cover bg-center
`

const Tile = styled(motion.li)`
  ${tw`${tileBaseStyle}`}
  ${({ backdrop }: { backdrop: string | null }) =>
    `background-image: url("${backdrop}");`}
  box-shadow: 0 0 0 #f56565, 0 0 10px 0 rgba(0,0,0,0.3) inset;
  transition: box-shadow 0.3s ease-in-out;
  :focus {
    outline: none;
    box-shadow: 0 0 0 6px #f56565, 0 0 10px 0 rgba(0, 0, 0, 0.3) inset;
  }
`

const FakeTile = tw(motion.li)`
  ${tileBaseStyle}
  justify-center
`

const FakeContent = tw(FakeContentImage)`
  w-full text-gray-300
`

const CountdownContainer = tw.div`
    flex flex-grow justify-center
    w-full sm:w-6/12 xl:w-5/12 sm:h-full
    px-3 pt-2 pb-0 sm:p-5 sm:pr-0
  `

const DetailsContainer = tw.div`
  flex justify-end
  w-full sm:w-6/12 xl:w-7/12 sm:h-full
  p-3 pt-0 sm:p-5 sm:pl-0 mt-auto
`

export function MovieListItem({ movieId }: { movieId: string }) {
  const [movieFocusIsOn, setMovieFocusIsOn] = useRecoilState(movieFocusOn(movieId))
  const { isError, data: movie } = useQuery(movieId, () => fetchMovieDetails(movieId))
  const { isBackdropLoading, backdrop } = useSetBackdropImage(isError, movie)
  const setStatus = useSetRecoilState(movieStatus(movieId))
  const tileRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    if (movieFocusIsOn && movie && !isBackdropLoading) {
      tileRef.current?.focus()
      setMovieFocusIsOn(false)
    }
  }, [isBackdropLoading, movie, movieFocusIsOn, setMovieFocusIsOn])

  useEffect(() => {
    movie && setStatus(movie.status)
  }, [movie, setStatus])

  return !isBackdropLoading && movie ? (
    <Tile
      tabIndex={-1}
      ref={tileRef}
      backdrop={backdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      layout
    >
      <CountdownContainer>
        <Countdown
          isError={isError}
          nextEpisode={movie.nextEpisode}
          status={movie.status}
          movieId={movieId}
        />
      </CountdownContainer>
      <DetailsContainer>
        <MovieDetailsCard isError={isError} movie={movie} />
      </DetailsContainer>
    </Tile>
  ) : (
    <FakeTile
      initial={{ opacity: 0 }}
      animate={{ opacity: [1, 0.3, 1] }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, loop: Infinity }}
    >
      <FakeContent />
    </FakeTile>
  )
}
