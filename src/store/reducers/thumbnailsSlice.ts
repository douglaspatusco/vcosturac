import { PrintsImages, PrintsProducts } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
  selectedPrint: keyof PrintsProducts | null;
  thumbnails: PrintsImages[];
}

const initialState: ProductState = {
  selectedPrint: null,
  thumbnails: [],
};

const printsThumbnailsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSelectedPrint(state, action: PayloadAction<keyof PrintsProducts>) {
      state.selectedPrint = action.payload;
    },
    setThumbnails(state, action: PayloadAction<PrintsImages[]>) {
      state.thumbnails = action.payload;
    },
  },
});

export const { setSelectedPrint, setThumbnails } = printsThumbnailsSlice.actions;

export const printsThumbnailsReducer =  printsThumbnailsSlice.reducer
