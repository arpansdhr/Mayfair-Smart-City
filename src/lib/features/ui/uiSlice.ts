import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  mobileMenuOpen: boolean;
  searchModalOpen: boolean;
  propertyModalOpen: boolean;
  currentSection: string;
  scrollY: number;
  theme: 'light' | 'dark';
}

const initialState: UIState = {
  mobileMenuOpen: false,
  searchModalOpen: false,
  propertyModalOpen: false,
  currentSection: 'home',
  scrollY: 0,
  theme: 'light',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileMenuOpen = action.payload;
    },
    setSearchModalOpen: (state, action: PayloadAction<boolean>) => {
      state.searchModalOpen = action.payload;
    },
    setPropertyModalOpen: (state, action: PayloadAction<boolean>) => {
      state.propertyModalOpen = action.payload;
    },
    setCurrentSection: (state, action: PayloadAction<string>) => {
      state.currentSection = action.payload;
    },
    setScrollY: (state, action: PayloadAction<number>) => {
      state.scrollY = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const {
  setMobileMenuOpen,
  setSearchModalOpen,
  setPropertyModalOpen,
  setCurrentSection,
  setScrollY,
  toggleTheme,
} = uiSlice.actions;

export default uiSlice.reducer;