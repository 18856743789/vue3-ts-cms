import { ILoginState } from './login/types'
import { IDashboardState } from './main/analysis/types'
import { ISystemState } from './main/system/types'

export interface IRootState {
  name: string
  age: number
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface IRootWithMoudle {
  login: ILoginState
  system: ISystemState
  dashboard: IDashboardState
}
export type IStoreType = IRootState & IRootWithMoudle
