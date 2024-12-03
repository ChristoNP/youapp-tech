'use client'

import BackButton from '@/components/BackButton'
import Link from 'next/link'
import { useState } from 'react'

export default function Register() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false)
    const handlePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }
    const handleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
    }

    return (
        <div className="min-h-screen w-full">
            <div className="mx-auto max-w-[375px] h-[812px] bg-gradient-to-bl from-[#1F4247] via-[#0D1D23] to-[#09141A]">
                {/* back button */}
                <div className="flex items-center justify-start py-[81px] px-[18px]">
                    <BackButton />
                </div>

                {/* Login */}
                <div className="flex flex-col items-center justify-center px-[18px]">
                    <div className="w-full pl-[18px] flex items-center justify-start">
                        <h1 className="text-white text-2xl font-bold leading-[29.05px] font-inter">Register</h1>
                    </div>
                    <form className="flex flex-col gap-4 mt-5">
                        <div className="w-[327px] h-[51px] bg-[#FFFFFF0F] rounded-[9px]">
                            <input type="email" name="email" placeholder="Enter Email" className="font-inter text-white px-[14px] w-full h-full bg-transparent outline-none text-[13px] leading-[15.73px]" />
                        </div>
                        <div className="w-[327px] h-[51px] bg-[#FFFFFF0F] rounded-[9px]">
                            <input type="text" name="username" placeholder="Create Username" className="font-inter text-white px-[14px] w-full h-full bg-transparent outline-none text-[13px] leading-[15.73px]" />
                        </div>
                        <div className="w-[327px] h-[51px] bg-[#FFFFFF0F] rounded-[9px] relative">
                            <input
                                type={isPasswordVisible ? "text" : "password"}
                                name="password"
                                placeholder="Create Password"
                                className="font-inter text-white px-[14px] w-full h-full bg-transparent outline-none text-[13px] leading-[15.73px]"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={handlePasswordVisibility}
                                className="absolute right-[14px] top-1/2 -translate-y-1/2 cursor-pointer"
                            >
                                <img
                                    src={isPasswordVisible ? "/eye.svg" : "/eye-off.png"}
                                    alt="toggle password"
                                    width={24}
                                    height={24}
                                />
                            </button>
                        </div>
                        <div className="w-[327px] h-[51px] bg-[#FFFFFF0F] rounded-[9px] relative">
                            <input
                                type={isConfirmPasswordVisible ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                className="font-inter text-white px-[14px] w-full h-full bg-transparent outline-none text-[13px] leading-[15.73px]"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={handleConfirmPasswordVisibility}
                                className="absolute right-[14px] top-1/2 -translate-y-1/2 cursor-pointer"
                            >
                                <img
                                    src={isConfirmPasswordVisible ? "/eye.svg" : "/eye-off.png"}
                                    alt="toggle password"
                                    width={24}
                                    height={24}
                                />
                            </button>
                        </div>
                        <button
                            type="submit"
                            className={`w-[327px] h-[51px] rounded-[9px] mt-3 bg-gradient-to-r from-[#62CDCB] to-[#4599DB] transition-all duration-300 ${password
                                ? 'opacity-100 shadow-[0_0_20px_rgba(98,205,203,0.5)]'
                                : 'opacity-50 cursor-not-allowed'
                                }`}
                            disabled={!password}
                        >
                            <span className="text-white font-inter text-[16px] leading-[19.5px] font-bold">Register</span>
                        </button>
                    </form>
                    <div className="mt-10">
                        <p className="text-white text-[13px] leading-[15.73px] font-inter">
                            Have an account?{" "}
                            <Link
                                href="/login"
                                className="font-inter bg-clip-text text-transparent bg-gradient-to-r from-[#94783E] to-[#D5BE88] underline decoration-[#94783E] underline-offset-2"
                                style={{
                                    backgroundImage: "linear-gradient(to right, #94783E, #D5BE88)",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Login Here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
