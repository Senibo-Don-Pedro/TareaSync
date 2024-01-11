'use client'

import { create } from '@/actions/create-board'
import { Button } from '@/components/ui/button'
import { useFormState, useFormStatus } from 'react-dom'

export const Form = () => {
  const initialState = { message: null, errors: {} }
  const [state, dispatch] = useFormState(create, initialState)

  return (
    <form action={dispatch}>
      <div className='flex flex-col space-y-2'>
        <input
          name='title'
          id='title'
          required
          placeholder='Hello'
          className='border'
        />
        {state?.errors?.title ? (
          <div>
            {state.errors.title.map((error: string) => (
              <p key={error} className='text-rose-500'>
                {error}
              </p>
            ))}
          </div>
        ) : null}
      </div>
      <Button type='submit'>Submit</Button>
    </form>
  )
}