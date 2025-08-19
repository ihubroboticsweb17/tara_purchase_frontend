"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ setConfigOpen, view, setView }) => {
  const views = [
    { name: 'Front', value: 'front' },
    { name: 'Side', value: 'side' },
    { name: 'Back', value: 'back' }
  ];

  return (
    <motion.header
      className="absolute top-0 left-0 right-0 z-30 bg-black/50 backdrop-blur-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="flex justify-between items-center p-6">
        <motion.div
          className="text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {/* <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            ROBOCRAFT
          </h1>
          <p className="text-sm text-gray-300">Configure Your Perfect Robot</p> */}
        </motion.div>

        <div className="flex items-center space-x-4">
          {/* View Controls */}
          <div className="flex space-x-2">
            {views.map((viewOption) => (
              <button
                key={viewOption.value}
                onClick={() => setView(viewOption.value)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  view === viewOption.value
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {viewOption.name}
              </button>
            ))}
          </div>

          <motion.button
            onClick={() => setConfigOpen(true)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg font-semibold text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Customize
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};