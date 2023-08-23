import create from 'zustand';
import {persist} from "zustand/middleware"

let appStore = (set)=>({
    dopen: true,
    updateOpen: (dopen) => set((state)=>({dopen:dopen})),
    rows: [],
    setRows:(rows)=> set((state)=> ({rows:rows}))
})

// persist: its used for when we store our data into localstorage then used "persist"

appStore  = persist (appStore, {name: "my_app_store"});

export const useAppStore = create(appStore);
