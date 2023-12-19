import { RoutesPath } from 'shared/config/routerConfig/routerConfig'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'

export interface ISidebarItem {
  path: string
  text: string
  Icon: React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & { title?: string }
  >
}

export const sidebarItemsList: ISidebarItem[] = [
  {
    path: RoutesPath.main,
    Icon: MainIcon,
    text: 'Главная'
  },
  {
    path: RoutesPath.about,
    Icon: AboutIcon,
    text: 'О сайте'
  },
  {
    path: RoutesPath.profile,
    Icon: ProfileIcon,
    text: 'Профиль'
  }
]
