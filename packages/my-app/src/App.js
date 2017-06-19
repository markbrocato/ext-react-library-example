import React from 'react'
import { StocksGrid, LoginForm } from 'my-lib';

/**
 * The main application view
 */
export default function App() {
    return (
        <div>
            <h1>Ext React Library Example</h1>
            <div style={{ margin: '20px 0' }}>
                <LoginForm height={300} width={300}/>
            </div>
            <div style={{ margin: '20px 0' }}>
                <StocksGrid title="Stocks" height={300} width={500}/>
            </div>
        </div>
    )
}
