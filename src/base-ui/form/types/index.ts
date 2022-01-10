type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: string
  // 针对select
  options?: any[]
  // 针对特殊的属性
  otherOptions?: any
  defaultValue?: any
  isHidden?: boolean
}

export interface IForm {
  title?: string
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemStyle?: any
}
