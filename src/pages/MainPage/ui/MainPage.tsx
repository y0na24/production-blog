import { BugButton } from 'app/providers/ErrorBoundary'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

const MainPage: FC = () => {
  const { t } = useTranslation('main')

  return (
    <div>
      <BugButton />
      {t('Главная страница')}
    </div>
  )
}

export default MainPage
