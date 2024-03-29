import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event"
import { CounterTwo } from "./Counter-two";


describe("counter-two", ()=>{

    test("renders correctly", ()=>{
        render(<CounterTwo count={0} />)
        const textElement = screen.getByText("Counter Two")
        expect(textElement).toBeInTheDocument()
    })

    test("handles are called", async()=>{
        user.setup()

        const incrementHandler = jest.fn()
        const decrementHandler = jest.fn()
        render(<CounterTwo count={0}
            handleIncrement={incrementHandler}
            handleDecrement={decrementHandler}
        
        />)

        const incrementButton = screen.getByRole('button', { name: "Increment"})
        expect(incrementButton).toBeInTheDocument()
        const decrementButton = screen.getByRole('button', { name: "Decrement"})
        expect(decrementButton).toBeInTheDocument()
        
        await user.click(incrementButton)
        await user.click(decrementButton)

        expect(incrementHandler).toHaveBeenCalledTimes(1)
        expect(decrementHandler).toHaveBeenCalledTimes(1)
        
    })
})