import { profileReducer } from 'entities/Profile/model/slice/profileSlice'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoader'

const initialReducers: ReducersList = {
  profile: profileReducer
}

const ProfilePage: FC = () => {
  const { t } = useTranslation()

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div>{t('PROFILE PAGE')}</div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
