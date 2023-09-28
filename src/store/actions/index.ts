//This file consists of constants that represents actions that our application can perform and dispatch to the Redux store. 

//With payload
export const moveRight = (data: string) => ({
	type: MOVE_RIGHT,
	payload: data
});