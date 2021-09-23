import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router, } from "react-router-dom";
import Users from './pages/User.js';

test('Render halaman Users dengan benar', async () => {
    render(
        <Router>
            <Users />
        </Router>
    );

    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent('Back to Home');

    const user = await waitFor(() => {
        return screen.findByText('Leanne Graham')
    }, { timeout: 5000 })
    expect(user).toBeInTheDocument()
})

