import { render, screen} from "@testing-library/react"
import Greet from "./Greet"

    test('renders correctly', ()=>{
        render(<Greet />)
        const textElement = screen.getByText(/greet/i)
        expect(textElement).toBeInTheDocument()
    })

    test('renders name correctly', ()=>{
        render(<Greet name="hari"/>)
        const textElement = screen.getByText(/greet/i)
        expect(textElement).toBeInTheDocument()
    })
    
