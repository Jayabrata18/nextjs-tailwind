"use client"


import {FC, useState} from 'react'
import { Button } from '@/ui/Button'
import { signIn } from 'next-auth/react'
import { toast } from './ui/Toast'

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
    const [isLoading, setIsLoading] = useState<Boolean>(false)

    const signInWithGoogle = async () => {
        setIsLoading(true)

        try {
            await signIn('google')
        } catch (error) {
            toast({
                title: 'Error signing in',
                message: 'please try again later',
                type: "error",
            })
        }
    }
    return (
        // <Button onClick={signInWithGoogle} isLoading={isLoading}>Sign in</Button>
        <Button onClick={signInWithGoogle} >Sign in</Button>
    )
}
// 
export default SignInButton