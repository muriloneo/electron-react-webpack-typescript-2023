import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Application from './components/Application';
import Index from "./components/Index"
// Say something
console.log('[ERWT] : Renderer execution started');

// Render application in DOM
createRoot(document.getElementById('app')).render(<BrowserRouter><Routes>
    <Route path="/Index" element={<Index />} />
    <Route path="*" element={<Application />} />
  </Routes>
</BrowserRouter>);
