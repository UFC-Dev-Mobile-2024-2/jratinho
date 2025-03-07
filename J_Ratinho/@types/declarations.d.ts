declare module '*.svg' {
    import React from 'react';
    import { SvgProps } from 'react-native-svg';
    const content: React.FC<SvgProps>;
    export default content;
  }

declare module '*.mp3' {
  const value: string;
  export default value;
}

export interface Question {
  id: number;
  documentId: string;
  question: string;
  topic: string;
  option: { id: string; text: string; correct: boolean }[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}