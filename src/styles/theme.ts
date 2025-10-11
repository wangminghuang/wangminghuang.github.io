import type { DefaultTheme } from 'styled-components'

const commonProps = {
  modelMaxWidth: '768px'
}

// export const lightTheme: DefaultTheme = {
//   backgroundColor: '#f5f5f5',
//   textColor: 'black',
//   headerBgColor: '#eae5e5',
//   accentColor: '#f36f06',
//   scrollbarTrack: '#f1f1f1',
//   scrollbarThumb: '#888888',
//   boxBgColor: '#eae5e5',
//   boxTextColor: '#130303',
//   projectSkillColor: 'white',
//   ...commonProps
// }

// export const darkTheme: DefaultTheme = {
//   backgroundColor: '#1a1a1a',
//   textColor: '#d7d7d8',
//   headerBgColor: '#2c2c2c',
//   accentColor: '#ffd700',
//   scrollbarTrack: '#2c2c2c',
//   scrollbarThumb: '#888888',
//   boxBgColor: '#2b2b2e',
//   boxTextColor: '#d3d3d3',
//   projectSkillColor: 'black',
//   ...commonProps
// }

export const lightTheme: DefaultTheme = {
  backgroundColor: '#f8f9fa',
  textColor: '#2c3e50',
  headerBgColor: '#e9ecef',
  accentColor: '#17a2b8',
  scrollbarTrack: '#f1f3f5',
  scrollbarThumb: '#adb5bd',
  boxBgColor: '#ffffff',
  boxTextColor: '#343a40',
  projectSkillColor: '#ffffff',
  ...commonProps
}

export const darkTheme: DefaultTheme = {
  backgroundColor: '#1a202c',
  textColor: '#e2e8f0',
  headerBgColor: '#2d3748',
  accentColor: '#3dc1b5',
  scrollbarTrack: '#2d3748',
  scrollbarThumb: '#718096',
  boxBgColor: '#2d3748',
  boxTextColor: '#e2e8f0',
  projectSkillColor: '#1a202c',
  ...commonProps
}

export type ThemeType = 'light' | 'dark'
