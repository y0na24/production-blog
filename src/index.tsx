import ReactDOM from 'react-dom/client'
import { App } from 'app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'

import 'app/styles/index.scss'
import 'shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { ErrorBoundaryError } from 'widgets/ErrorBoundaryError'
import { Suspense } from 'react'
import { StoreProvider } from 'app/providers/StoreProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary
        fallback={
          <Suspense>
            <ErrorBoundaryError />
          </Suspense>
        }
      >
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>
)
