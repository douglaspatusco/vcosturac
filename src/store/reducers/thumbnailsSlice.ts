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

const thumbnailsSlice = createSlice({
  name: 'thumbnail',
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

export const { setSelectedPrint, setThumbnails } = thumbnailsSlice.actions;
export const thumbnailsReducer =  thumbnailsSlice.reducer
