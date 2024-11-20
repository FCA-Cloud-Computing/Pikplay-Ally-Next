import React, { useState, useEffect } from 'react'

const useDebounce = (value, wait = 0) => {
  const [debounceValue, setDebounceValue] = useState(value)
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebounceValue(value)
    }, wait)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [value])
  return debounceValue
}

const useSearch = () => {
  const [results, setResults] = useState([{ node: 1 }])
  const [isLoading, setIsLoading] = useState(false)
  const [inputText, setInputText] = useState()
  const searchTerm = useDebounce(inputText, 1000)
  const [showSearchModal, setShowSearchModal] = useState(false)
  const city = null

  const searchThisWord = e => {
    setInputText('')
  }

  useEffect(() => {
    if (searchTerm) {
      setIsLoading(true)
      getFeed({ city: 'bogota', origin: 'searchBox', title: searchTerm })
        .then(results => {
          setResults(results)
          setTimeout(() => setIsLoading(false), 1000)
        })
        .catch(err => {
          setIsLoading(false)
        })
    }
  }, [searchTerm])

  return {
    handleCity,
    inputText,
    isLoading,
    results,
    setInputText,
    setShowSearchModal,
    showSearchModal,
    searchTerm,
    searchThisWord,
  }
}

export default useSearch
