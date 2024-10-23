import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import TodoProvider from './providers/Todo';
import LanguageProvider from './providers/Language';
import { CurrencyProvider } from './providers/Currency';

createRoot(document.getElementById('root')).render(
    <CurrencyProvider>
        <LanguageProvider>
            <TodoProvider>
                <App />
            </TodoProvider>
        </LanguageProvider>
    </CurrencyProvider>
)
