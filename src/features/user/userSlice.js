import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'sonner'

const initialState = {
	user: { username: 'coding addict' },
	theme: 'dracula'
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginUser: (state, action) => {
			console.log('Login')
		},
		loginOut: (state) => {
			console.log('logout')
		},
		toggleTheme: (state) => {
			console.log('toggle theme')
		},
	}
})

export const {loginOut,loginUser,toggleTheme} = userSlice.actions
export default userSlice.reducer