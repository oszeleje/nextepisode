import React from 'react'
import tw, { styled } from 'twin.macro'
import { useRecoilCallback, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

import { CounterFollowTexts } from '../../translations/en-US'
import { SearchResult } from '../../api/types'

import { isResultsModalVisible } from './sharedState'
import { movieFocusOn, timeLeftToAir } from '../MovieTile/sharedState'
import { idMovieInitDataRecord } from '../MovieCollection/sharedState'

import { Check } from '../../assets/icons/Check'

const Result = tw.li`
  flex flex-row items-center
  mx-3 last:mb-4
`

const ResultButton = styled.button(() => [
  tw`
  flex flex-row justify-between items-center
  w-full py-2 pr-2 pl-4 ml-1
  text-gray-700 text-base sm:text-xl font-medium text-left
  rounded-full border-transparent border-2
  focus:outline-none focus:bg-white focus:border-gray-300
  hover:bg-gray-100 hover:text-gray-800
`,
  '-webkit-tap-highlight-color: transparent;',
])

const ResultText = tw.div`
  pr-2 pb-1
`

const InCollectionIcon = tw(Check)`
  w-4 h-6
`

const PillsContainer = tw.div`
  flex
`

const InfoPill = tw.div`
  py-1 px-2 mr-1 rounded-full
  text-sm
  bg-gray-300
`

interface SingleResultProps {
  result: SearchResult
  setSearchBarInputText: React.Dispatch<React.SetStateAction<string>>
}

export function SingleResult({ result, setSearchBarInputText }: SingleResultProps) {
  const [idMovieRecord, setIdMovieRecord] = useRecoilState(idMovieInitDataRecord)
  const timeLeftToAirValue = useRecoilValue(timeLeftToAir(result.id))
  const setIsModalVisible = useSetRecoilState(isResultsModalVisible)

  const setFocusOn = useRecoilCallback(({ set }) => {
    return (resultId: string) => {
      set(movieFocusOn(resultId), true)
    }
  }, [])

  return (
    <Result>
      <ResultButton onClick={() => handleOnClick(result)}>
        <ResultText>{result.name}</ResultText>
        <PillsContainer>
          {idMovieRecord[result.id] && (
            <InfoPill>
              <InCollectionIcon iconLabel="in collection" />
            </InfoPill>
          )}
          {timeLeftToAirValue !== null && timeLeftToAirValue < 60 && (
            <InfoPill>{getTimeLeftPillText(timeLeftToAirValue)}</InfoPill>
          )}
          {result.firstAirDate && <InfoPill>{result.firstAirDate.substr(0, 4)}</InfoPill>}
        </PillsContainer>
      </ResultButton>
    </Result>
  )

  function handleOnClick(result: SearchResult) {
    setIsModalVisible(false)
    setSearchBarInputText('')
    const isMapped = idMovieRecord[result.id]
    if (isMapped) {
      setFocusOn(result.id)
    } else {
      setFocusOn(result.id)
      setIdMovieRecord((prevState) => ({
        ...prevState,
        [result.id]: { id: result.id, name: result.name, addTime: Date.now() },
      }))
    }
  }

  function getTimeLeftPillText(daysLeft: number) {
    if (daysLeft === 0) {
      return CounterFollowTexts.today
    }
    if (daysLeft === 1) {
      return `${daysLeft} ${CounterFollowTexts.dayLeft}`
    }
    return `${daysLeft} ${CounterFollowTexts.daysLeft}`
  }
}
