import { useCallback } from 'preact/hooks'

import { useFocusTrap } from './use-focus-trap'
import { useFormState } from './use-form-state'
import { useInitialFocus } from './use-initial-focus'
import { useKeyDownHandler } from './use-key-down-handler'

export function useForm<T>(
  initialState: T,
  options: {
    validate?: (state: T) => boolean
    submit: (state: T) => void
    close: (state: T) => void
  }
) {
  const { validate, submit, close } = options
  const { formState, setFormState } = useFormState(initialState)
  const handleSubmit = useCallback(
    function () {
      if (typeof validate !== 'undefined' && validate(formState) === false) {
        return
      }
      submit(formState)
    },
    [formState, submit, validate]
  )
  useKeyDownHandler('Enter', handleSubmit)
  const handleClose = useCallback(
    function () {
      close(formState)
    },
    [close, formState]
  )
  useKeyDownHandler('Escape', handleClose)
  useFocusTrap()
  const disabled =
    typeof validate !== 'undefined' ? validate(formState) === false : false
  const initialFocus = useInitialFocus()
  return {
    disabled,
    formState,
    handleSubmit,
    initialFocus,
    setFormState
  }
}
