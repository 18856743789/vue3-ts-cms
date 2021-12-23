import { App } from 'vue'
import 'element-plus/lib/theme-chalk/base.css'

import {
  ElAside,
  ElButton,
  ElCheckbox,
  ElContainer,
  ElForm,
  ElFormItem,
  ElHeader,
  ElInput,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElRadio,
  ElSubmenu,
  ElTabPane,
  ElTabs
} from 'element-plus'

const components = [
  ElAside,
  ElButton,
  ElCheckbox,
  ElContainer,
  ElForm,
  ElFormItem,
  ElHeader,
  ElInput,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElRadio,
  ElSubmenu,
  ElTabPane,
  ElTabs
]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
